import { TopBar } from '../../../../components';
export const DashboardPage = (): JSX.Element => (
  <div className='flex flex-col min-h-screen'>
    <TopBar />
    <div className='container flex items-center justify-center flex-1 min-h-full mx-auto'>
      <img
        src='https://melmagazine.com/wp-content/uploads/2019/07/Stonks_Meme.jpg'
        alt=''
      />
    </div>
  </div>
);
