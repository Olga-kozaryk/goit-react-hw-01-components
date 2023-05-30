import { Profile } from "./Profile/profile";
import user from './Profile/user.json';

import { Statistics } from "./Statistics/statistics";
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>

      <Statistics
        title="Upload stats"
        stats={data}
      />
    </div>
  );
};
