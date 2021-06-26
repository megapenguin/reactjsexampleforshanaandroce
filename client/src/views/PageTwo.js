import React, { Suspense } from "react";

import  Page from "../components/page2/PageTwo";

function PageTwo() {
    return (
        <div>
                <Suspense fallback={<h1>LOADING</h1>}>
        <Page />
      </Suspense>
        </div>
    )
}

export default PageTwo
