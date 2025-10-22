import Spinner from "@/components/ui/Spinner";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="sm:hidden">
        <Spinner size="sm" label="Loading..." />
      </div>
      <div className="hidden sm:flex md:hidden">
        <Spinner size="md" label="Loading..." />
      </div>
      <div className="hidden md:flex">
        <Spinner size="lg" label="Loading..." />
      </div>
    </div>
  );
};

export default loading;
