import NotFound from "@/app/not-found";
import CategoriesPage from "@/pages/our-approach/CategoriesPage";

async function getData(category: any) {
	try {
		const res = await fetch(
			`http://localhost:3000/data/our-approach/${category}.json`,
			{
				cache: "no-store",
			},
		);

		if (!res.ok) {
			throw new Error("Data not found");
		}

		return res.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
}

export async function generateMetadata({ params }: any) {
	const category = params.category;

	const data = await getData(category);

	if (!data) {
		return <NotFound />;
	}
	const { pageTitle, pageDescription } = data;

	return {
		title: pageTitle,
		description: pageDescription,
	};
}

const page = async ({ params }: any) => {
	const category = params.category;
	const data = await getData(category);
	if (!data) {
		return <NotFound />;
	}

	return (
		<>
			<CategoriesPage data={data} />
		</>
	);
};

export default page;
