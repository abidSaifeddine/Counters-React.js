
import * as React from 'react';


export function Navbar({ totalCounters })  {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    Number of counters with a value > 0 :
                    <span className="badge badge-pill badge-secondary">
                        { totalCounters }
                    </span>

                </a>
            </nav>
        );
}
