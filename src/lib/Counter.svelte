<script lang="ts">
    let numbers = [];
    let rangeNumber = 0;
    let fifthCalculated = false

    /**
     *
     * @param min
     * @param max
     * Get random int x. min <= x <= max
     */
    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    /**
     *
     * @param min
     * @param max
     * Get sorted Array. min <= x <= max
     */
    const getSortedArray = (min: number, max: number) => {
        return [...Array(max - min + 1).keys()].map(v => Number(v) + min)
    }

    /**
     *
     * @param array
     * Shuffle array items.
     */
    const shuffle = (array: number[]) => {
        for (let index = array.length - 1; index > 0; index--) {
            const randomPosition = Math.floor(Math.random() * (index + 1));
            const temporary = array[index];
            array[index] = array[randomPosition];
            array[randomPosition] = temporary;
        }
        return array;
    }

    const extract = () => {
        rangeNumber = getRandomInt(21, 26);
        if (numbers.length > 4) {
            fifthCalculated = true
            return;
        }
        switch (numbers.length) {
            case 0:
                numbers = [...numbers, shuffle(getSortedArray(1, rangeNumber)).splice(0, 6).sort((a, b) => a - b)]
                break
            case 1:
                numbers = [...numbers, shuffle(getSortedArray(rangeNumber + 1, 45)).splice(0, 6).sort((a, b) => a - b)]
                break
            case 2:
                numbers = [...numbers, shuffle(getSortedArray(rangeNumber - 10, rangeNumber + 20)).splice(0, 6).sort((a, b) => a - b)]
                break
            default:
                numbers = [...numbers, shuffle(getSortedArray(1, 45)).splice(0, 6).sort((a, b) => a - b)]
                break
        }
    }
</script>

<div class="card">
    {#if !fifthCalculated}
        <button on:click={extract}>Extract</button>
    {:else}
        <p>Thank you for using. We generate until 5th row in a session.</p>
    {/if}
</div>

<div class="card">
    <table>
        <thead>
        <tr>
            <th>N</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>6th</th>
        </tr>
        </thead>
        <tbody>
        {#each numbers as numberRow, i}
            <tr>
                <td>{i}</td>
                {#each numberRow as number}
                    <td>{number}</td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</div>
