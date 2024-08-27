import Header from './components/Header';
import Hero from './components/Hero';
import JobsListings from './components/JobsListings';
import './main.css';
import { JobsDataProvider } from './store/JobsContext';


export default function App() {
  return (
    <JobsDataProvider>
      <Header/>
      <Hero/>
      <JobsListings/>
    </JobsDataProvider>
  )
}
