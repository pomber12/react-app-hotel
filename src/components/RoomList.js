import React from 'react';
import Room from './Room'

export default function RoomsList({rooms}) {
   /* return (
        <div>
            Hello from roomlist
        </div>
    ) */

    return (
        <section className="roomslist">
        <div className="roomslist-center">
    
    {
 
        rooms.map(item=>{
          return<Room key={item.id}  room={item}/>;
        })    
    }

    </div>
    </section>
    )
}
