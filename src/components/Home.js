import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableUser from "./TableUser";

function Home(props) {
    return (
        <div>
            <Header />
            <FormAddNew />
            <TableUser />
        </div>
    );
}

export default Home;
