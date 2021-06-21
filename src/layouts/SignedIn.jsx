import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp3.licdn.com/dms/image/C4D03AQEQU8bMX2Nu1w/profile-displayphoto-shrink_100_100/0/1586847833785?e=1628726400&v=beta&t=atBEQ0W11i9EYPp844MPEC_Ug0BNwIW7nF5k3Zjyp_g"/>
                <Dropdown pointing="top left" text="Burak">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
