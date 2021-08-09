import { useState } from "react";

const ManageTeam = (props) => {

    const [team, setTeam] = useState(""); 
    const teamList = props.teamList;       

    const createTeam = () => {
        props.socket.emit('createteam', {team : team})
        props.setCurrentTeam(team);
        console.log('current team : '+team);
    }

    const switchTeam = (team) => {
        props.setCurrentTeam(team);
        props.socket.emit('jointeam', team);
        console.log('joined team : ' +team)
    }


    return (
        <div>

            <h3>Current Team</h3>
            {props.team}

            <input value={team} onChange={e => setTeam(e.target.value)}/>
            <button onClick={createTeam}>Create Team</button>

            <ul className="list-group">
                {
                    teamList.map((team, index) => {
                        return <li key={index} className="list-group-item" onClick={e => switchTeam(team)}>
                            {team}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ManageTeam;