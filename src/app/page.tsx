import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6">
            Bienvenue sur <span className="text-primary"> ton Site</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Construisons ensemble votre présence numérique avec des solutions modernes et performantes.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="primary" size="lg">Commencer</Button>
            <Button variant="secondary" size="lg">En savoir plus</Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-main">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-primary mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" 
strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Optimisation totale pour une expérience utilisateur fluide.</p>
            </Card>

            <Card>
              <div className="text-primary mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" 
strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">Protocoles de sécurité avancés pour vos données.</p>
            </Card>

            <Card>
              <div className="text-primary mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" 
strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 
0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Une interface moderne et adaptative à tous les écrans.</p>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer ?</h2>
          <p className="mb-8 opacity-90">{"Contactez-nous dès aujourd'hui pour discuter de votre projet."}</p>
          <Button variant="secondary" size="lg">Nous contacter</Button>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}