import NavBar from "../components/NavBar";

export default function Page() {

  return (
    <>
      <NavBar />
      <h1 className="text-2xl font-normal mb-6 text-black text-center max-w-170 mx-auto mt-10">Сложная закупка ИНВ+НДС<br />Расчет стоимости договора при сложных условиях -<br />часть товаров услуг с НДС, часть товаров, услуг без НДС</h1>
    </>
  );
}