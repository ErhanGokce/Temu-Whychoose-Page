import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={crumb.href}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                  <span className="mx-2 text-gray-400">{">"}</span>
                </>
              ) : (
                <span className="text-black font-medium">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
