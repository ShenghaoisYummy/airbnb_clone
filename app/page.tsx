import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const { category, search } = searchParams;

  return (
    <section>
      <CategoriesList category={category} search={search} />
      <PropertiesContainer category={category} search={search} />
    </section>
  );
}

export default HomePage;
