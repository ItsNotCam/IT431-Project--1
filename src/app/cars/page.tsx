import CarDisplay from "@/layouts/CarDisplay";
import Nav from "@/layouts/Nav";
import { getCars } from "@/lib/db";

export default async function Home() {
	var cars: DBCar[] = await getCars();
	return (
		<main>
			<CarDisplay cars={cars} />
		</main>
	);
}
