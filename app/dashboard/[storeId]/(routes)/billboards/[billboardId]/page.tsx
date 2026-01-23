import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: Promise<{ billboardId: string; storeId: string }>;
}) => {
  const { billboardId, storeId } = await params;
  const billboard = await prismadb.billboard.findUnique({
    where: { id: billboardId },
  });
  const categories = await prismadb.category.findMany({
    where: { storeId: storeId },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} categories={categories} />
      </div>
    </div>
  );
};

export default BillboardPage;
