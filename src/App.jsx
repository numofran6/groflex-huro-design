import './App.css';
import { PageContent } from './components/layout/PageContent';
import { SidebarPanel } from './components/layout/SidebarPanel';
import { MainSidebar } from './components/layout/MainSidebar';
import { AccountDetails } from './pages/account-details/AccountDetails';
import { SignUp } from './pages/signup/SignUp';

function App() {
	return (
		<>
			{/* <>
				<MainSidebar />
				<SidebarPanel />
				<PageContent />
			</> */}

			<>
				<AccountDetails />
			</>

			{/* <>
				<SignUp />
			</> */}
		</>
	);
}

export default App;
