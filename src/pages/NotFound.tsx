
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Página no encontrada</p>
        <Button asChild>
          <Link to="/">Regresar al Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
