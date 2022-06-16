<script>
</script>

<template>
    <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/register">Register</RouterLink>
        <RouterLink class="link" to="/login">Login</RouterLink>
    </nav>
</template>

<style scoped lang="css">
nav {
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
}

nav .link {
    margin-left: 1rem;
    color: #000000;
}
</style>