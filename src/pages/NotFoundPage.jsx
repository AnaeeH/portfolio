import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="mb-2 text-6xl font-bold text-navy">404</p>
      <h2 className="mb-4 text-2xl font-semibold text-navy">Page introuvable</h2>
      <p className="mb-8 text-neutral-700">
        La page que tu cherches n'existe pas ou a été déplacée.
      </p>
      <Link to={asset('/')} className="btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  );
}
