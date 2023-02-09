import './App.css';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { UserGridSidebar } from './components/layout/UserGridSidebar';
import { DashboardSidebar } from './components/layout/DashboardSidebar';
import { UserGridPageContent } from './components/layout/UserGridPageContent';
import { DashboardPageContent } from './components/layout/DashboardPageContent';
import { MobileUserGridSubsidebar } from './components/layout/MobileUserGridSubsidebar';
import { MobileDashboardSubsidebar } from './components/layout/MobileDashboardSubsidebar';
import { ElementsSidebar } from './components/layout/ElementsSidebar';
import { MobileElementsSubsidebar } from './components/layout/MobileElementsSubsidebar';
import { ComponentsSidebar } from './components/layout/ComponentsSidebar';
import { MobileComponentsSubsidebar } from './components/layout/MobileComponentsSubsidebar';
import { MobileChatSubsidebar } from './components/layout/MobileChatSubsidebar';
import { ChatSidebar } from './components/layout/ChatSidebar';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<>
							<DashboardSidebar />
							<MobileDashboardSubsidebar />
							<DashboardPageContent />
						</>
					}
				/>

				<Route
					path="user-grid"
					element={
						<>
							<UserGridSidebar />
							<MobileUserGridSubsidebar />
							<UserGridPageContent />
						</>
					}
				/>

				<Route
					path="elements"
					element={
						<>
							<ElementsSidebar />
							<MobileElementsSubsidebar />
							<DashboardPageContent />
						</>
					}
				/>

				<Route
					path="components"
					element={
						<>
							<ComponentsSidebar />
							<MobileComponentsSubsidebar />
							<UserGridPageContent />
						</>
					}
				/>

				<Route
					path="chat"
					element={
						<>
							<ChatSidebar />
							<MobileChatSubsidebar />
							<DashboardPageContent />
						</>
					}
				/>

				<Route
					path="more-on-lorem"
					element={
						<>
							<UserGridSidebar />
							<MobileUserGridSubsidebar />
							<DashboardPageContent />
						</>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
