<script lang="ts">
    import lotteryLogo from './assets/lottery.png'
    import Counter from './lib/Counter.svelte'
</script>

<main>
    <h1>Lottery Extractor</h1>
    <p>
        Find your luck to bind with computer.
    </p>
    <div>
        <a href="https://dhlottery.co.kr" target="_blank" rel="noreferrer">
            <img src={lotteryLogo} class="logo" alt="Vite Logo"/>
        </a>
    </div>

    <Counter/>

    <div class="read-the-docs">
        <ul>
            <li>
                <code>range_x: 21 ≤ range_x ≤ 26</code>
            </li>
            <li>
                <code>1st_rows: 1 ≤ x ≤ range_x</code>
            </li>
            <li>
                <code>2nd_rows: range_x ≤ x ≤ 45</code>
            </li>
            <li>
                <code>3rd_rows: range_x - 10 ≤ x ≤ range_x + 20</code>
            </li>
            <li>
                <code>nth_rows: 1 ≤ x ≤ 45</code>
            </li>
        </ul>
    </div>
</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .read-the-docs {
        color: #888;
        text-align: start;
    }

    .read-the-docs ul {
        list-style-type: circle;
    }
</style>
