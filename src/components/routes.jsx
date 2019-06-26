import React from "react"
import { Route } from "react-router-dom"
import { NewRelease } from "./newRelease";
import { NewTracks } from "./newTracks";
import { By4 } from "./4by4";
const Routes = () => {
    return <div>

        <Route path="/release" component={NewRelease} />
        <Route path="/tracks" component={NewTracks} />
        <Route path="/4" component={By4} />

    </div>
}

export default Routes