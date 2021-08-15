import { useState } from "react";

const ManageTeam = (props) => {

    const [team, setTeam] = useState("");
    const teamList = props.teamList;

    const createTeam = () => {
        props.socket.emit('createteam', { team: team })
        props.setCurrentTeam(team);
        console.log('current team : ' + team);
    }

    const switchTeam = (team) => {
        props.setCurrentTeam(team);
        props.socket.emit('jointeam', team);
        console.log('joined team : ' + team)
    }

    const getTeam = () => {
        props.socket.on('')
    }


    return (
        <div>
            <span style={{ fontSize: '1.3rem' }}><b>Current Team</b> : {props.team}</span>

            <input className="form-control" value={team} onChange={e => setTeam(e.target.value)} />
            <button onClick={createTeam} className="btn btn-primary w-100">Create Team</button>

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