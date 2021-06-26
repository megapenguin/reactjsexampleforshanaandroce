import React, { Suspense } from "react";

import  Page from "../components/page1/PageOne";

function PageOne() {
    return (
        <div>
            <Suspense fallback={<h1>LOADING</h1>}>
        <Page />
      </Suspense>
        </div>
    )
}

export default PageOne
