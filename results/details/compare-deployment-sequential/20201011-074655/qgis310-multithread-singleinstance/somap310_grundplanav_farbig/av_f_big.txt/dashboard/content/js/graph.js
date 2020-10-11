/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 3068.0, "series": [{"data": [[0.0, 170.0], [0.1, 170.0], [0.2, 181.0], [0.3, 188.0], [0.4, 188.0], [0.5, 193.0], [0.6, 195.0], [0.7, 198.0], [0.8, 198.0], [0.9, 199.0], [1.0, 202.0], [1.1, 202.0], [1.2, 202.0], [1.3, 202.0], [1.4, 203.0], [1.5, 203.0], [1.6, 203.0], [1.7, 203.0], [1.8, 203.0], [1.9, 203.0], [2.0, 204.0], [2.1, 204.0], [2.2, 205.0], [2.3, 205.0], [2.4, 206.0], [2.5, 207.0], [2.6, 208.0], [2.7, 208.0], [2.8, 209.0], [2.9, 209.0], [3.0, 210.0], [3.1, 210.0], [3.2, 212.0], [3.3, 213.0], [3.4, 213.0], [3.5, 213.0], [3.6, 213.0], [3.7, 214.0], [3.8, 214.0], [3.9, 215.0], [4.0, 215.0], [4.1, 216.0], [4.2, 216.0], [4.3, 216.0], [4.4, 217.0], [4.5, 218.0], [4.6, 218.0], [4.7, 218.0], [4.8, 220.0], [4.9, 221.0], [5.0, 221.0], [5.1, 221.0], [5.2, 222.0], [5.3, 222.0], [5.4, 223.0], [5.5, 225.0], [5.6, 225.0], [5.7, 225.0], [5.8, 225.0], [5.9, 230.0], [6.0, 232.0], [6.1, 232.0], [6.2, 233.0], [6.3, 233.0], [6.4, 233.0], [6.5, 233.0], [6.6, 233.0], [6.7, 234.0], [6.8, 234.0], [6.9, 235.0], [7.0, 239.0], [7.1, 239.0], [7.2, 239.0], [7.3, 243.0], [7.4, 244.0], [7.5, 244.0], [7.6, 244.0], [7.7, 246.0], [7.8, 248.0], [7.9, 248.0], [8.0, 248.0], [8.1, 248.0], [8.2, 249.0], [8.3, 249.0], [8.4, 249.0], [8.5, 250.0], [8.6, 251.0], [8.7, 251.0], [8.8, 251.0], [8.9, 251.0], [9.0, 253.0], [9.1, 253.0], [9.2, 253.0], [9.3, 253.0], [9.4, 256.0], [9.5, 256.0], [9.6, 258.0], [9.7, 259.0], [9.8, 260.0], [9.9, 260.0], [10.0, 261.0], [10.1, 261.0], [10.2, 261.0], [10.3, 264.0], [10.4, 264.0], [10.5, 264.0], [10.6, 264.0], [10.7, 266.0], [10.8, 266.0], [10.9, 267.0], [11.0, 267.0], [11.1, 267.0], [11.2, 267.0], [11.3, 267.0], [11.4, 267.0], [11.5, 267.0], [11.6, 268.0], [11.7, 268.0], [11.8, 268.0], [11.9, 268.0], [12.0, 268.0], [12.1, 268.0], [12.2, 268.0], [12.3, 269.0], [12.4, 270.0], [12.5, 270.0], [12.6, 270.0], [12.7, 270.0], [12.8, 270.0], [12.9, 270.0], [13.0, 271.0], [13.1, 272.0], [13.2, 272.0], [13.3, 272.0], [13.4, 272.0], [13.5, 273.0], [13.6, 273.0], [13.7, 273.0], [13.8, 273.0], [13.9, 273.0], [14.0, 273.0], [14.1, 273.0], [14.2, 273.0], [14.3, 273.0], [14.4, 273.0], [14.5, 274.0], [14.6, 275.0], [14.7, 275.0], [14.8, 275.0], [14.9, 276.0], [15.0, 276.0], [15.1, 276.0], [15.2, 277.0], [15.3, 278.0], [15.4, 278.0], [15.5, 278.0], [15.6, 279.0], [15.7, 279.0], [15.8, 280.0], [15.9, 280.0], [16.0, 280.0], [16.1, 281.0], [16.2, 282.0], [16.3, 282.0], [16.4, 282.0], [16.5, 282.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 284.0], [17.0, 284.0], [17.1, 284.0], [17.2, 284.0], [17.3, 285.0], [17.4, 285.0], [17.5, 286.0], [17.6, 286.0], [17.7, 287.0], [17.8, 287.0], [17.9, 287.0], [18.0, 287.0], [18.1, 287.0], [18.2, 287.0], [18.3, 287.0], [18.4, 287.0], [18.5, 287.0], [18.6, 288.0], [18.7, 288.0], [18.8, 288.0], [18.9, 288.0], [19.0, 288.0], [19.1, 288.0], [19.2, 289.0], [19.3, 289.0], [19.4, 289.0], [19.5, 290.0], [19.6, 290.0], [19.7, 290.0], [19.8, 290.0], [19.9, 290.0], [20.0, 290.0], [20.1, 290.0], [20.2, 291.0], [20.3, 291.0], [20.4, 291.0], [20.5, 291.0], [20.6, 291.0], [20.7, 291.0], [20.8, 291.0], [20.9, 291.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 292.0], [21.4, 293.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 294.0], [21.9, 294.0], [22.0, 294.0], [22.1, 294.0], [22.2, 294.0], [22.3, 294.0], [22.4, 295.0], [22.5, 296.0], [22.6, 297.0], [22.7, 297.0], [22.8, 297.0], [22.9, 297.0], [23.0, 299.0], [23.1, 299.0], [23.2, 300.0], [23.3, 301.0], [23.4, 301.0], [23.5, 301.0], [23.6, 301.0], [23.7, 301.0], [23.8, 301.0], [23.9, 302.0], [24.0, 302.0], [24.1, 302.0], [24.2, 302.0], [24.3, 303.0], [24.4, 304.0], [24.5, 304.0], [24.6, 304.0], [24.7, 304.0], [24.8, 305.0], [24.9, 305.0], [25.0, 305.0], [25.1, 305.0], [25.2, 306.0], [25.3, 306.0], [25.4, 306.0], [25.5, 307.0], [25.6, 307.0], [25.7, 307.0], [25.8, 308.0], [25.9, 308.0], [26.0, 308.0], [26.1, 308.0], [26.2, 309.0], [26.3, 311.0], [26.4, 312.0], [26.5, 312.0], [26.6, 312.0], [26.7, 313.0], [26.8, 313.0], [26.9, 314.0], [27.0, 314.0], [27.1, 315.0], [27.2, 315.0], [27.3, 315.0], [27.4, 316.0], [27.5, 316.0], [27.6, 316.0], [27.7, 319.0], [27.8, 320.0], [27.9, 321.0], [28.0, 321.0], [28.1, 323.0], [28.2, 323.0], [28.3, 326.0], [28.4, 326.0], [28.5, 327.0], [28.6, 330.0], [28.7, 330.0], [28.8, 330.0], [28.9, 333.0], [29.0, 334.0], [29.1, 334.0], [29.2, 335.0], [29.3, 337.0], [29.4, 337.0], [29.5, 337.0], [29.6, 338.0], [29.7, 338.0], [29.8, 340.0], [29.9, 340.0], [30.0, 343.0], [30.1, 344.0], [30.2, 344.0], [30.3, 345.0], [30.4, 345.0], [30.5, 347.0], [30.6, 347.0], [30.7, 347.0], [30.8, 350.0], [30.9, 350.0], [31.0, 350.0], [31.1, 356.0], [31.2, 357.0], [31.3, 357.0], [31.4, 357.0], [31.5, 357.0], [31.6, 362.0], [31.7, 362.0], [31.8, 362.0], [31.9, 364.0], [32.0, 365.0], [32.1, 365.0], [32.2, 366.0], [32.3, 366.0], [32.4, 368.0], [32.5, 368.0], [32.6, 369.0], [32.7, 370.0], [32.8, 370.0], [32.9, 370.0], [33.0, 372.0], [33.1, 373.0], [33.2, 374.0], [33.3, 374.0], [33.4, 374.0], [33.5, 375.0], [33.6, 375.0], [33.7, 375.0], [33.8, 378.0], [33.9, 378.0], [34.0, 378.0], [34.1, 379.0], [34.2, 379.0], [34.3, 379.0], [34.4, 379.0], [34.5, 379.0], [34.6, 380.0], [34.7, 381.0], [34.8, 381.0], [34.9, 381.0], [35.0, 381.0], [35.1, 381.0], [35.2, 381.0], [35.3, 381.0], [35.4, 382.0], [35.5, 382.0], [35.6, 383.0], [35.7, 384.0], [35.8, 384.0], [35.9, 384.0], [36.0, 384.0], [36.1, 384.0], [36.2, 385.0], [36.3, 385.0], [36.4, 385.0], [36.5, 385.0], [36.6, 385.0], [36.7, 385.0], [36.8, 386.0], [36.9, 386.0], [37.0, 386.0], [37.1, 386.0], [37.2, 387.0], [37.3, 387.0], [37.4, 387.0], [37.5, 388.0], [37.6, 388.0], [37.7, 388.0], [37.8, 388.0], [37.9, 388.0], [38.0, 388.0], [38.1, 388.0], [38.2, 388.0], [38.3, 389.0], [38.4, 389.0], [38.5, 389.0], [38.6, 389.0], [38.7, 390.0], [38.8, 390.0], [38.9, 390.0], [39.0, 390.0], [39.1, 390.0], [39.2, 390.0], [39.3, 390.0], [39.4, 391.0], [39.5, 391.0], [39.6, 391.0], [39.7, 391.0], [39.8, 391.0], [39.9, 391.0], [40.0, 391.0], [40.1, 391.0], [40.2, 391.0], [40.3, 391.0], [40.4, 391.0], [40.5, 392.0], [40.6, 392.0], [40.7, 392.0], [40.8, 392.0], [40.9, 392.0], [41.0, 392.0], [41.1, 393.0], [41.2, 393.0], [41.3, 393.0], [41.4, 393.0], [41.5, 394.0], [41.6, 394.0], [41.7, 394.0], [41.8, 394.0], [41.9, 394.0], [42.0, 394.0], [42.1, 395.0], [42.2, 395.0], [42.3, 395.0], [42.4, 396.0], [42.5, 396.0], [42.6, 396.0], [42.7, 396.0], [42.8, 396.0], [42.9, 396.0], [43.0, 396.0], [43.1, 396.0], [43.2, 396.0], [43.3, 397.0], [43.4, 397.0], [43.5, 398.0], [43.6, 398.0], [43.7, 398.0], [43.8, 398.0], [43.9, 399.0], [44.0, 399.0], [44.1, 399.0], [44.2, 399.0], [44.3, 399.0], [44.4, 399.0], [44.5, 400.0], [44.6, 400.0], [44.7, 400.0], [44.8, 400.0], [44.9, 400.0], [45.0, 400.0], [45.1, 400.0], [45.2, 401.0], [45.3, 401.0], [45.4, 401.0], [45.5, 401.0], [45.6, 402.0], [45.7, 402.0], [45.8, 402.0], [45.9, 402.0], [46.0, 402.0], [46.1, 402.0], [46.2, 403.0], [46.3, 403.0], [46.4, 403.0], [46.5, 403.0], [46.6, 403.0], [46.7, 403.0], [46.8, 403.0], [46.9, 404.0], [47.0, 404.0], [47.1, 405.0], [47.2, 405.0], [47.3, 405.0], [47.4, 405.0], [47.5, 405.0], [47.6, 405.0], [47.7, 406.0], [47.8, 406.0], [47.9, 406.0], [48.0, 406.0], [48.1, 406.0], [48.2, 406.0], [48.3, 407.0], [48.4, 407.0], [48.5, 407.0], [48.6, 408.0], [48.7, 408.0], [48.8, 409.0], [48.9, 409.0], [49.0, 410.0], [49.1, 410.0], [49.2, 410.0], [49.3, 410.0], [49.4, 411.0], [49.5, 411.0], [49.6, 411.0], [49.7, 411.0], [49.8, 412.0], [49.9, 412.0], [50.0, 412.0], [50.1, 412.0], [50.2, 412.0], [50.3, 413.0], [50.4, 413.0], [50.5, 414.0], [50.6, 414.0], [50.7, 414.0], [50.8, 415.0], [50.9, 417.0], [51.0, 417.0], [51.1, 418.0], [51.2, 419.0], [51.3, 419.0], [51.4, 419.0], [51.5, 419.0], [51.6, 420.0], [51.7, 420.0], [51.8, 421.0], [51.9, 423.0], [52.0, 423.0], [52.1, 423.0], [52.2, 423.0], [52.3, 424.0], [52.4, 424.0], [52.5, 424.0], [52.6, 424.0], [52.7, 425.0], [52.8, 425.0], [52.9, 425.0], [53.0, 426.0], [53.1, 426.0], [53.2, 427.0], [53.3, 427.0], [53.4, 427.0], [53.5, 428.0], [53.6, 428.0], [53.7, 430.0], [53.8, 430.0], [53.9, 432.0], [54.0, 432.0], [54.1, 434.0], [54.2, 435.0], [54.3, 435.0], [54.4, 435.0], [54.5, 436.0], [54.6, 436.0], [54.7, 436.0], [54.8, 436.0], [54.9, 438.0], [55.0, 440.0], [55.1, 440.0], [55.2, 441.0], [55.3, 442.0], [55.4, 445.0], [55.5, 445.0], [55.6, 445.0], [55.7, 445.0], [55.8, 445.0], [55.9, 445.0], [56.0, 448.0], [56.1, 449.0], [56.2, 451.0], [56.3, 451.0], [56.4, 452.0], [56.5, 452.0], [56.6, 452.0], [56.7, 452.0], [56.8, 452.0], [56.9, 453.0], [57.0, 453.0], [57.1, 456.0], [57.2, 456.0], [57.3, 456.0], [57.4, 456.0], [57.5, 457.0], [57.6, 457.0], [57.7, 459.0], [57.8, 459.0], [57.9, 459.0], [58.0, 460.0], [58.1, 460.0], [58.2, 460.0], [58.3, 461.0], [58.4, 461.0], [58.5, 461.0], [58.6, 461.0], [58.7, 461.0], [58.8, 462.0], [58.9, 462.0], [59.0, 463.0], [59.1, 463.0], [59.2, 464.0], [59.3, 464.0], [59.4, 464.0], [59.5, 465.0], [59.6, 466.0], [59.7, 466.0], [59.8, 466.0], [59.9, 468.0], [60.0, 468.0], [60.1, 468.0], [60.2, 468.0], [60.3, 468.0], [60.4, 468.0], [60.5, 470.0], [60.6, 471.0], [60.7, 473.0], [60.8, 473.0], [60.9, 473.0], [61.0, 478.0], [61.1, 478.0], [61.2, 478.0], [61.3, 479.0], [61.4, 480.0], [61.5, 481.0], [61.6, 481.0], [61.7, 482.0], [61.8, 483.0], [61.9, 483.0], [62.0, 486.0], [62.1, 487.0], [62.2, 488.0], [62.3, 488.0], [62.4, 488.0], [62.5, 488.0], [62.6, 489.0], [62.7, 489.0], [62.8, 493.0], [62.9, 494.0], [63.0, 497.0], [63.1, 497.0], [63.2, 498.0], [63.3, 499.0], [63.4, 499.0], [63.5, 500.0], [63.6, 500.0], [63.7, 500.0], [63.8, 500.0], [63.9, 503.0], [64.0, 504.0], [64.1, 507.0], [64.2, 507.0], [64.3, 507.0], [64.4, 508.0], [64.5, 508.0], [64.6, 508.0], [64.7, 514.0], [64.8, 516.0], [64.9, 516.0], [65.0, 516.0], [65.1, 517.0], [65.2, 518.0], [65.3, 518.0], [65.4, 519.0], [65.5, 519.0], [65.6, 519.0], [65.7, 519.0], [65.8, 520.0], [65.9, 520.0], [66.0, 523.0], [66.1, 523.0], [66.2, 523.0], [66.3, 524.0], [66.4, 525.0], [66.5, 525.0], [66.6, 525.0], [66.7, 525.0], [66.8, 525.0], [66.9, 525.0], [67.0, 526.0], [67.1, 526.0], [67.2, 526.0], [67.3, 526.0], [67.4, 526.0], [67.5, 527.0], [67.6, 527.0], [67.7, 527.0], [67.8, 528.0], [67.9, 529.0], [68.0, 529.0], [68.1, 529.0], [68.2, 530.0], [68.3, 532.0], [68.4, 532.0], [68.5, 533.0], [68.6, 534.0], [68.7, 534.0], [68.8, 535.0], [68.9, 535.0], [69.0, 535.0], [69.1, 535.0], [69.2, 536.0], [69.3, 536.0], [69.4, 536.0], [69.5, 536.0], [69.6, 536.0], [69.7, 537.0], [69.8, 537.0], [69.9, 537.0], [70.0, 538.0], [70.1, 538.0], [70.2, 538.0], [70.3, 538.0], [70.4, 539.0], [70.5, 539.0], [70.6, 539.0], [70.7, 540.0], [70.8, 540.0], [70.9, 541.0], [71.0, 541.0], [71.1, 541.0], [71.2, 541.0], [71.3, 541.0], [71.4, 541.0], [71.5, 541.0], [71.6, 542.0], [71.7, 542.0], [71.8, 542.0], [71.9, 542.0], [72.0, 544.0], [72.1, 544.0], [72.2, 544.0], [72.3, 544.0], [72.4, 545.0], [72.5, 545.0], [72.6, 545.0], [72.7, 546.0], [72.8, 547.0], [72.9, 547.0], [73.0, 548.0], [73.1, 548.0], [73.2, 552.0], [73.3, 552.0], [73.4, 553.0], [73.5, 553.0], [73.6, 553.0], [73.7, 554.0], [73.8, 555.0], [73.9, 555.0], [74.0, 555.0], [74.1, 556.0], [74.2, 556.0], [74.3, 557.0], [74.4, 557.0], [74.5, 557.0], [74.6, 557.0], [74.7, 558.0], [74.8, 558.0], [74.9, 558.0], [75.0, 559.0], [75.1, 559.0], [75.2, 560.0], [75.3, 560.0], [75.4, 561.0], [75.5, 561.0], [75.6, 563.0], [75.7, 563.0], [75.8, 563.0], [75.9, 563.0], [76.0, 564.0], [76.1, 564.0], [76.2, 566.0], [76.3, 566.0], [76.4, 566.0], [76.5, 566.0], [76.6, 568.0], [76.7, 568.0], [76.8, 568.0], [76.9, 568.0], [77.0, 568.0], [77.1, 569.0], [77.2, 569.0], [77.3, 570.0], [77.4, 570.0], [77.5, 571.0], [77.6, 572.0], [77.7, 572.0], [77.8, 572.0], [77.9, 572.0], [78.0, 574.0], [78.1, 576.0], [78.2, 576.0], [78.3, 578.0], [78.4, 580.0], [78.5, 580.0], [78.6, 581.0], [78.7, 581.0], [78.8, 584.0], [78.9, 584.0], [79.0, 588.0], [79.1, 588.0], [79.2, 588.0], [79.3, 588.0], [79.4, 590.0], [79.5, 593.0], [79.6, 602.0], [79.7, 602.0], [79.8, 603.0], [79.9, 604.0], [80.0, 607.0], [80.1, 607.0], [80.2, 610.0], [80.3, 611.0], [80.4, 611.0], [80.5, 611.0], [80.6, 617.0], [80.7, 617.0], [80.8, 617.0], [80.9, 619.0], [81.0, 619.0], [81.1, 621.0], [81.2, 621.0], [81.3, 621.0], [81.4, 621.0], [81.5, 622.0], [81.6, 622.0], [81.7, 622.0], [81.8, 623.0], [81.9, 623.0], [82.0, 624.0], [82.1, 625.0], [82.2, 626.0], [82.3, 626.0], [82.4, 627.0], [82.5, 629.0], [82.6, 630.0], [82.7, 630.0], [82.8, 632.0], [82.9, 633.0], [83.0, 635.0], [83.1, 635.0], [83.2, 641.0], [83.3, 642.0], [83.4, 642.0], [83.5, 644.0], [83.6, 645.0], [83.7, 647.0], [83.8, 647.0], [83.9, 647.0], [84.0, 647.0], [84.1, 648.0], [84.2, 648.0], [84.3, 650.0], [84.4, 650.0], [84.5, 650.0], [84.6, 650.0], [84.7, 651.0], [84.8, 651.0], [84.9, 652.0], [85.0, 652.0], [85.1, 652.0], [85.2, 653.0], [85.3, 653.0], [85.4, 655.0], [85.5, 655.0], [85.6, 660.0], [85.7, 660.0], [85.8, 662.0], [85.9, 664.0], [86.0, 665.0], [86.1, 665.0], [86.2, 666.0], [86.3, 667.0], [86.4, 668.0], [86.5, 668.0], [86.6, 669.0], [86.7, 669.0], [86.8, 669.0], [86.9, 669.0], [87.0, 671.0], [87.1, 672.0], [87.2, 672.0], [87.3, 673.0], [87.4, 675.0], [87.5, 678.0], [87.6, 678.0], [87.7, 679.0], [87.8, 680.0], [87.9, 682.0], [88.0, 682.0], [88.1, 682.0], [88.2, 683.0], [88.3, 687.0], [88.4, 687.0], [88.5, 690.0], [88.6, 692.0], [88.7, 692.0], [88.8, 693.0], [88.9, 695.0], [89.0, 696.0], [89.1, 696.0], [89.2, 697.0], [89.3, 697.0], [89.4, 699.0], [89.5, 699.0], [89.6, 702.0], [89.7, 702.0], [89.8, 703.0], [89.9, 703.0], [90.0, 703.0], [90.1, 704.0], [90.2, 704.0], [90.3, 705.0], [90.4, 708.0], [90.5, 710.0], [90.6, 710.0], [90.7, 710.0], [90.8, 712.0], [90.9, 713.0], [91.0, 713.0], [91.1, 713.0], [91.2, 713.0], [91.3, 720.0], [91.4, 720.0], [91.5, 722.0], [91.6, 722.0], [91.7, 722.0], [91.8, 724.0], [91.9, 725.0], [92.0, 729.0], [92.1, 729.0], [92.2, 730.0], [92.3, 732.0], [92.4, 732.0], [92.5, 732.0], [92.6, 735.0], [92.7, 740.0], [92.8, 742.0], [92.9, 742.0], [93.0, 752.0], [93.1, 753.0], [93.2, 755.0], [93.3, 755.0], [93.4, 757.0], [93.5, 759.0], [93.6, 759.0], [93.7, 769.0], [93.8, 776.0], [93.9, 791.0], [94.0, 791.0], [94.1, 802.0], [94.2, 805.0], [94.3, 810.0], [94.4, 810.0], [94.5, 812.0], [94.6, 816.0], [94.7, 820.0], [94.8, 820.0], [94.9, 823.0], [95.0, 840.0], [95.1, 840.0], [95.2, 844.0], [95.3, 853.0], [95.4, 867.0], [95.5, 867.0], [95.6, 874.0], [95.7, 882.0], [95.8, 891.0], [95.9, 891.0], [96.0, 899.0], [96.1, 916.0], [96.2, 923.0], [96.3, 923.0], [96.4, 925.0], [96.5, 960.0], [96.6, 983.0], [96.7, 983.0], [96.8, 985.0], [96.9, 1006.0], [97.0, 1006.0], [97.1, 1016.0], [97.2, 1020.0], [97.3, 1035.0], [97.4, 1035.0], [97.5, 1039.0], [97.6, 1042.0], [97.7, 1053.0], [97.8, 1053.0], [97.9, 1064.0], [98.0, 1109.0], [98.1, 1132.0], [98.2, 1132.0], [98.3, 1143.0], [98.4, 1215.0], [98.5, 1215.0], [98.6, 1233.0], [98.7, 1252.0], [98.8, 1275.0], [98.9, 1275.0], [99.0, 1286.0], [99.1, 1416.0], [99.2, 1610.0], [99.3, 1610.0], [99.4, 1693.0], [99.5, 1745.0], [99.6, 2609.0], [99.7, 2609.0], [99.8, 2885.0], [99.9, 3068.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 163.0, "series": [{"data": [[600.0, 73.0], [2600.0, 1.0], [700.0, 33.0], [2800.0, 1.0], [3000.0, 1.0], [800.0, 15.0], [200.0, 163.0], [900.0, 6.0], [1000.0, 8.0], [1100.0, 3.0], [300.0, 157.0], [1200.0, 5.0], [1400.0, 1.0], [400.0, 139.0], [100.0, 7.0], [1600.0, 2.0], [1700.0, 1.0], [500.0, 119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 469.0, "series": [{"data": [[0.0, 469.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 260.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.60240302E12, "maxY": 1.0, "series": [{"data": [[1.60240332E12, 1.0], [1.60240302E12, 1.0], [1.60240314E12, 1.0], [1.60240308E12, 1.0], [1.60240326E12, 1.0], [1.6024032E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240332E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 474.24489795918356, "minX": 1.0, "maxY": 474.24489795918356, "series": [{"data": [[1.0, 474.24489795918356]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 474.24489795918356]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 841.0, "minX": 1.60240302E12, "maxY": 407605.06666666665, "series": [{"data": [[1.60240332E12, 254012.65], [1.60240302E12, 407605.06666666665], [1.60240314E12, 333932.15], [1.60240308E12, 272395.43333333335], [1.60240326E12, 272071.95], [1.6024032E12, 295754.61666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60240332E12, 907.1666666666666], [1.60240302E12, 841.0], [1.60240314E12, 1058.95], [1.60240308E12, 876.7], [1.60240326E12, 877.35], [1.6024032E12, 961.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240332E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 406.6639344262295, "minX": 1.60240302E12, "maxY": 537.8288288288287, "series": [{"data": [[1.60240332E12, 406.6639344262295], [1.60240302E12, 537.8288288288287], [1.60240314E12, 421.1197183098592], [1.60240308E12, 514.2672413793101], [1.60240326E12, 518.405172413793], [1.6024032E12, 466.1640625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240332E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 405.8032786885247, "minX": 1.60240302E12, "maxY": 536.6036036036038, "series": [{"data": [[1.60240332E12, 405.8032786885247], [1.60240302E12, 536.6036036036038], [1.60240314E12, 419.94366197183103], [1.60240308E12, 513.0431034482759], [1.60240326E12, 517.2931034482757], [1.6024032E12, 465.109375]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240332E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.014084507042253528, "minX": 1.60240302E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60240332E12, 0.01639344262295082], [1.60240302E12, 0.3333333333333333], [1.60240314E12, 0.014084507042253528], [1.60240308E12, 0.017241379310344827], [1.60240326E12, 0.034482758620689676], [1.6024032E12, 0.023437500000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240332E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 170.0, "minX": 1.60240302E12, "maxY": 3068.0, "series": [{"data": [[1.60240332E12, 1693.0], [1.60240302E12, 3068.0], [1.60240314E12, 2885.0], [1.60240308E12, 816.0], [1.60240326E12, 867.0], [1.6024032E12, 1252.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60240332E12, 202.64199982404708], [1.60240302E12, 170.25599914550781], [1.60240314E12, 183.008999761343], [1.60240308E12, 374.37099980473516], [1.60240326E12, 286.6889996373653], [1.6024032E12, 193.80499984622003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60240332E12, 203.30620007038115], [1.60240302E12, 173.48160034179688], [1.60240314E12, 183.9099000954628], [1.60240308E12, 375.1081000781059], [1.60240326E12, 288.05790014505385], [1.6024032E12, 194.385500061512]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60240332E12, 203.01099991202355], [1.60240302E12, 172.0479995727539], [1.60240314E12, 183.5094998806715], [1.60240308E12, 374.7804999023676], [1.60240326E12, 287.4494998186827], [1.6024032E12, 194.12749992311]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60240332E12, 202.0], [1.60240302E12, 170.0], [1.60240314E12, 181.0], [1.60240308E12, 374.0], [1.60240326E12, 286.0], [1.6024032E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60240332E12, 303.5], [1.60240302E12, 417.0], [1.60240314E12, 306.5], [1.60240308E12, 492.5], [1.60240326E12, 527.5], [1.6024032E12, 402.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240332E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 208.0, "minX": 1.0, "maxY": 663.5, "series": [{"data": [[1.0, 663.5], [2.0, 498.5], [4.0, 286.0], [5.0, 208.0], [3.0, 353.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 208.0, "minX": 1.0, "maxY": 662.0, "series": [{"data": [[1.0, 662.0], [2.0, 497.5], [4.0, 286.0], [5.0, 208.0], [3.0, 353.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60240302E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60240332E12, 2.0166666666666666], [1.60240302E12, 1.8666666666666667], [1.60240314E12, 2.3666666666666667], [1.60240308E12, 1.9333333333333333], [1.60240326E12, 1.9333333333333333], [1.6024032E12, 2.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240332E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.85, "minX": 1.60240302E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60240332E12, 2.033333333333333], [1.60240302E12, 1.85], [1.60240314E12, 2.3666666666666667], [1.60240308E12, 1.9333333333333333], [1.60240326E12, 1.9333333333333333], [1.6024032E12, 2.1333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240332E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.85, "minX": 1.60240302E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60240332E12, 2.033333333333333], [1.60240302E12, 1.85], [1.60240314E12, 2.3666666666666667], [1.60240308E12, 1.9333333333333333], [1.60240326E12, 1.9333333333333333], [1.6024032E12, 2.1333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240332E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.85, "minX": 1.60240302E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60240332E12, 2.033333333333333], [1.60240302E12, 1.85], [1.60240314E12, 2.3666666666666667], [1.60240308E12, 1.9333333333333333], [1.60240326E12, 1.9333333333333333], [1.6024032E12, 2.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240332E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

