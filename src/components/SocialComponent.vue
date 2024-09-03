<script setup>
    import Github from '@/assets/icons/github.svg'
    import Email from '@/assets/icons/email.svg'
    import Linkedin from '@/assets/icons/linkedin.svg'
    import Telegram from '@/assets/icons/telegram.svg'
    import X from '@/assets/icons/x.svg'
</script>

<template>
    <div class="social">
        <a href="https://github.com/KirisakiAria" target="_blank" title="https://github.com/KirisakiAria">
            <Github />
        </a>
        <a href="mailto:dalaoge@outlook.com" title="dalaoge@outlook.com">
            <Email />
        </a>
        <a href="https://www.linkedin.com/in/ezio-li-884325154/" target="_blank" title="https://www.linkedin.com/in/ezio-li-884325154/">
            <Linkedin />
        </a>
        <a href="https://x.com/KirisakiAria" target="_blank" title="https://x.com/KirisakiAria">
            <X />
        </a>
        <a href="https://t.me/greatpond" target="_blank" title="https://t.me/greatpond">
            <Telegram />
        </a>
    </div>
</template>

<style lang="less" scope>
    .social {
        margin-top: 40px;

        a {
            display: inline-block;
        }

        svg {
            width: 30px;
            height: 30px;
            margin-right: 40px;
        }
    }
</style>
