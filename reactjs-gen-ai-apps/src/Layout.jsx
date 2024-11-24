import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { AppLayout, SideNavigation } from '@cloudscape-design/components';

export default () => {
    const [activeHref, setActiveHref] = useState("/")
    useEffect(() => {
        setActiveHref("/")
    }, [])



    let navigate = useNavigate()



    return (
        <AppLayout key={1}
            headerSelector="#h"
            toolsHide={true}
            disableContentPaddings={false}
            navigationHide={false}
            navigation={
                <SideNavigation
                    activeHref={activeHref}

                    header={
                        { href: "/", text: "Intranet" }
                    }
                    items={
                        [
                            { type: "divider" },
                            {
                                type: "section", text: "Artificial Intelligent Advisor", items: [
                                { type: 'link', text: `Agent`, href: `/bedrockagent` },
                            ]
                        }
                        ]
                    }
                    onFollow={event => {
                        if (!event.detail.external) {
                            event.preventDefault();
                            console.log(event.detail.href)
                            setActiveHref(event.detail.href)
                            navigate(event.detail.href)
                        }
                    }}
                />
            }
            content={<Outlet />}
        />)
}