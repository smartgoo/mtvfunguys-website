<script>
    import {
        Button,
        Collapse,
        Icon,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<div class="mb-5 container">
    <Navbar  light expand="md">
        <NavbarBrand href="/">MTV FunGuys</NavbarBrand>
        <NavbarToggler on:click={() => (isOpen = !isOpen)} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav class="ms-auto" navbar>
                <NavItem>
                    <NavLink href="/#attributes">Attributes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#faq">FAQ</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://discord.gg/dvysSsY99e" target="_blank">
                        <i class="lni lni-discord"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://twitter.com/MTVFunGuys" target="_blank">
                        <i class="lni lni-twitter-filled"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</div>

<slot>
</slot>

<style>
    i {
        font-size: 1.5rem;
    }
</style>
