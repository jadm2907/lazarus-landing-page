class Logger {
  constructor() {
    this.environment = process.env.REACT_APP_ENVIRONMENT || 'development';
    this.logs = [];
    this.errors = [];
  }

  getTimestamp() {
    return new Date().toISOString().replace('T', ' ').substring(0, 19);
  }

  info(message, data = {}) {
    const timestamp = this.getTimestamp();
    const logMessage = `${timestamp} [INFO]: ${message}${Object.keys(data).length ? ' ' + JSON.stringify(data) : ''}`;
    
    console.log(logMessage);
    
    // Guardar en memoria
    this.logs.push(logMessage);
    
    // En producción, podrías enviar los logs a un servicio externo
    if (this.environment === 'production') {
      this.sendToMonitoringService('info', message, data);
    }
  }

  error(message, error = {}) {
    const timestamp = this.getTimestamp();
    const errorData = {
      message: error.message,
      stack: error.stack,
      ...error
    };
    
    const logMessage = `${timestamp} [ERROR]: ${message}${Object.keys(errorData).length ? ' ' + JSON.stringify(errorData) : ''}`;
    
    console.error(logMessage);
    
    // Guardar en memoria
    this.errors.push(logMessage);
    
    if (this.environment === 'production') {
      this.sendToMonitoringService('error', message, errorData);
    }
  }

  warn(message, data = {}) {
    const timestamp = this.getTimestamp();
    const logMessage = `${timestamp} [WARN]: ${message}${Object.keys(data).length ? ' ' + JSON.stringify(data) : ''}`;
    
    console.warn(logMessage);
    
    // Guardar en memoria
    this.logs.push(logMessage);
    
    if (this.environment === 'production') {
      this.sendToMonitoringService('warn', message, data);
    }
  }

  // Método para descargar logs
  downloadLogs() {
    this.downloadFile(this.logs.join('\n'), 'frontend.log');
    this.downloadFile(this.errors.join('\n'), 'error.log');
  }

  // Método para descargar un archivo
  downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  sendToMonitoringService(level, message, data) {
    // Implementar envío a servicios externos si es necesario
  }
}

export default new Logger();