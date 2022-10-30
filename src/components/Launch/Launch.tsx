import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import './style.css'

export interface OwnProps{
    handleIdChange: (newId:number) => void
}

interface Props extends OwnProps{
    data: LaunchesQuery
}

const Launch: React.FC<Props> = ({data,handleIdChange})=>(
    <div className="Launches">
        <h3>All SpaceX Launches</h3>
        <ol className="LaunchesOL">
            {!!data.launches && data.launches.map(
                (launch,i)=>!!launch && (
                    <li key={i} className='LaunchesItem' onClick={() => handleIdChange(launch.flight_number!)}>
                        {launch.mission_name} - {launch.launch_year}
                    </li>
                )
            )}
        </ol>
    </div>
)

export default Launch;
