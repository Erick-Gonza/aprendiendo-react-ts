import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  const users = [
    {
      id:1,
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      initialIsFollowing: true
    },
    {
      id:2,
      userName: 'pheralb',
      name: 'Pablo Hernandez',
      initialIsFollowing: false
    },
    {
      id:3,
      userName: 'vxnder',
      name: 'Vander hart',
      initialIsFollowing: false
    }
  ]

  return (
    <div className='app'>
      {
        users.map(user=>{
          const { id, userName, name, initialIsFollowing } = user
          return (
            <TwitterFollowCard
              key={id}
              userName={userName}
              name={name}
              initialIsFollowing={initialIsFollowing}
            />
          )
        })
      }
    </div>
  )
}

export default App