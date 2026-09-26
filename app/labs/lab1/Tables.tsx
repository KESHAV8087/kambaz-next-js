export default function Tables() {
  return (
    <div id="wd-tables">
      {/* Book sample: quiz grades table Q1–Q3 + average row.
          With AI extends it to Q4–Q10 with a recalculated average. */}
      <h4>Quiz grades</h4>
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Q1</td><td>90</td></tr>
          <tr><td>Q2</td><td>85</td></tr>
          <tr><td>Q3</td><td>80</td></tr>
          <tr><td>Q4</td><td>95</td></tr>
          <tr><td>Q5</td><td>70</td></tr>
          <tr><td>Q6</td><td>88</td></tr>
          <tr><td>Q7</td><td>92</td></tr>
          <tr><td>Q8</td><td>78</td></tr>
          <tr><td>Q9</td><td>84</td></tr>
          <tr><td>Q10</td><td>100</td></tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Average</th>
            {/* (90+85+80+95+70+88+92+78+84+100)/10 = 86.2 */}
            <th>86.2</th>
          </tr>
        </tfoot>
      </table>

      {/* On your own — a second personal table */}
      <h4>My weekly schedule</h4>
      <table id="wd-your-table" border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monday</td><td>Lectures</td></tr>
          <tr><td>Wednesday</td><td>Lab work</td></tr>
          <tr><td>Friday</td><td>Assignment build</td></tr>
          <tr><td>Sunday</td><td>Submit &amp; deploy</td></tr>
        </tbody>
      </table>
    </div>
  );
}
