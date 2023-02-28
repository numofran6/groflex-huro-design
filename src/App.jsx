import './App.css';
import { MainSidebar } from './components/layout/MainSidebar';
import { AccountDetails } from './pages/account-details/AccountDetails';
import { SignUp } from './pages/signup/SignUp';

function App() {
	return (
		<div>
			<MainSidebar />
			<AccountDetails />
			{/* <SignUp /> */}
		</div>
	);
}

export default App;
