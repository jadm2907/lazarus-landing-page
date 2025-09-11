import React, { useEffect, useState } from 'react';
import '../App.css';
import '../styles/CallToAction.css';
import { initScrollReveal } from '../utils/scrollEffects.js';
import ContactForm from './ContactForm';

const CallToAction = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    initScrollReveal();
  }, []);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <section id="contacto" className="cta-section reveal">
        <div className="container">
          <div className="cta-header reveal">
            <h2 className="cta-title">Transforma Tu Práctica Clínica Hoy</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="before-card reveal">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center mr-3"></div>
                    <h3 className="text-xl font-semibold text-red-200">ANTES</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-100/80 text-sm">Productividad baja y procesos ineficientes</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-100/80 text-sm">Errores frecuentes en evaluaciones</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-100/80 text-sm">Atención fragmentada del paciente</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-100/80 text-sm">Herramientas obsoletas y desconectadas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="after-card reveal">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-emerald-600/30 rounded-full flex items-center justify-center mr-3"></div>
                    <h3 className="text-xl font-semibold text-emerald-200">DESPUÉS</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-100/80 text-sm">Herramienta integrada de vanguardia</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-100/80 text-sm">Multiplica tu impacto en pacientes</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-100/80 text-sm">Pionero de la salud mental digital</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-100/80 text-sm">Precisión y eficiencia maximizada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary delay-1" onClick={toggleForm}>
            Solicita Demo Exclusiva para Early Adopters
          </button>
        </div>
      </section>
      {isFormOpen && (
        <ContactForm
          initialMessage="Estoy interesado en ser un early adopter de Lazarus"
          onClose={toggleForm}
        />
      )}
    </>
  );
};

export default CallToAction;