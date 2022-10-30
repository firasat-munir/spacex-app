import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import './style.css'

interface Props {
    data:LaunchInfoQuery
}

const className="LaunchDetails"

const LaunchDetails: React.FC<Props>=({data})=>{
    if(!data.launch){
        return <div>Launch Unavailable</div>
    }
    
    return(
        <div className={className}>
            <div className={`${className}-status`}>
                <span>Flight {data.launch.flight_number} : </span>
                {data.launch.launch_success ? (
                    <span className={`${className}-success`}>Success</span>
                ):(
                    <span className={`${className}-failed`}>Failed</span>
                    )
                }
            </div>
            <h1 className={`${className}-title`}>{data.launch.mission_name} - ({data.launch.rocket?.rocket_name} | {data.launch.rocket?.rocket_type})</h1>
            <p className={`${className}-launch-year`}>Launched from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
            <p className={`${className}-description`}>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className={`${className}-image-list`}>
                    {data.launch.links.flickr_images.map((image,i) =>
                        image ? ( <img 
                            src={image}
                            alt={`${data.launch?.mission_name} ${i}`}
                            key={image}
                            className={`${className}-image`} />
                             ) : null
                    )}
                </div>
            )}
        </div>
    )
}

export default LaunchDetails;