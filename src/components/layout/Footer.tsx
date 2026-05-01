export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-accent">
              ClientSite
            </h3>
            <p className="text-sm text-gray-400">
              Une solution moderne pour vos besoins numériques.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Politique
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-400">contact@clientsite.com</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {currentYear} ClientSite. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}