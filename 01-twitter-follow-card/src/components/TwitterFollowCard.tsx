import { useState } from "react";

interface Props {
	userName: string;
	name: string;
	initialIsFollowing: boolean;
}

const TwitterFollowCard: React.FC<Props> = ({ userName, name, initialIsFollowing }) => {
	const [isFollowing, setIsFollowing] = useState<boolean>(initialIsFollowing)
	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button'

	const handleClick = ():void =>{
		setIsFollowing(!isFollowing)
	}

	return (
		<article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={`https://unavatar.io/${userName}`} alt="El avatar de erick" className='tw-followCard-avatar'/>

        <div className='tw-followCard-info'>
          <strong className=''>{name}</strong>
          <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
        </div>
      </header>

      <aside className=''>
        <button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
      </aside>
    </article>
	)
}

export default TwitterFollowCard