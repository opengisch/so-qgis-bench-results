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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 2986.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 180.0], [0.3, 181.0], [0.4, 181.0], [0.5, 183.0], [0.6, 188.0], [0.7, 188.0], [0.8, 188.0], [0.9, 190.0], [1.0, 192.0], [1.1, 193.0], [1.2, 193.0], [1.3, 194.0], [1.4, 194.0], [1.5, 195.0], [1.6, 195.0], [1.7, 196.0], [1.8, 196.0], [1.9, 196.0], [2.0, 198.0], [2.1, 199.0], [2.2, 199.0], [2.3, 199.0], [2.4, 200.0], [2.5, 202.0], [2.6, 202.0], [2.7, 202.0], [2.8, 203.0], [2.9, 203.0], [3.0, 204.0], [3.1, 204.0], [3.2, 204.0], [3.3, 206.0], [3.4, 206.0], [3.5, 207.0], [3.6, 208.0], [3.7, 208.0], [3.8, 208.0], [3.9, 210.0], [4.0, 210.0], [4.1, 211.0], [4.2, 211.0], [4.3, 212.0], [4.4, 214.0], [4.5, 215.0], [4.6, 215.0], [4.7, 215.0], [4.8, 216.0], [4.9, 216.0], [5.0, 216.0], [5.1, 217.0], [5.2, 217.0], [5.3, 217.0], [5.4, 218.0], [5.5, 219.0], [5.6, 219.0], [5.7, 219.0], [5.8, 219.0], [5.9, 220.0], [6.0, 220.0], [6.1, 220.0], [6.2, 220.0], [6.3, 222.0], [6.4, 223.0], [6.5, 223.0], [6.6, 224.0], [6.7, 225.0], [6.8, 225.0], [6.9, 227.0], [7.0, 237.0], [7.1, 238.0], [7.2, 238.0], [7.3, 240.0], [7.4, 240.0], [7.5, 241.0], [7.6, 241.0], [7.7, 241.0], [7.8, 242.0], [7.9, 242.0], [8.0, 242.0], [8.1, 247.0], [8.2, 250.0], [8.3, 250.0], [8.4, 250.0], [8.5, 251.0], [8.6, 251.0], [8.7, 251.0], [8.8, 252.0], [8.9, 253.0], [9.0, 254.0], [9.1, 254.0], [9.2, 256.0], [9.3, 257.0], [9.4, 257.0], [9.5, 257.0], [9.6, 258.0], [9.7, 258.0], [9.8, 260.0], [9.9, 260.0], [10.0, 260.0], [10.1, 261.0], [10.2, 261.0], [10.3, 262.0], [10.4, 263.0], [10.5, 263.0], [10.6, 263.0], [10.7, 263.0], [10.8, 263.0], [10.9, 264.0], [11.0, 264.0], [11.1, 264.0], [11.2, 264.0], [11.3, 264.0], [11.4, 264.0], [11.5, 265.0], [11.6, 266.0], [11.7, 266.0], [11.8, 266.0], [11.9, 267.0], [12.0, 267.0], [12.1, 267.0], [12.2, 268.0], [12.3, 268.0], [12.4, 268.0], [12.5, 268.0], [12.6, 269.0], [12.7, 269.0], [12.8, 272.0], [12.9, 272.0], [13.0, 272.0], [13.1, 272.0], [13.2, 272.0], [13.3, 272.0], [13.4, 272.0], [13.5, 273.0], [13.6, 273.0], [13.7, 273.0], [13.8, 274.0], [13.9, 274.0], [14.0, 274.0], [14.1, 274.0], [14.2, 275.0], [14.3, 275.0], [14.4, 275.0], [14.5, 276.0], [14.6, 276.0], [14.7, 277.0], [14.8, 277.0], [14.9, 278.0], [15.0, 278.0], [15.1, 278.0], [15.2, 279.0], [15.3, 280.0], [15.4, 280.0], [15.5, 280.0], [15.6, 280.0], [15.7, 280.0], [15.8, 280.0], [15.9, 280.0], [16.0, 281.0], [16.1, 282.0], [16.2, 282.0], [16.3, 282.0], [16.4, 283.0], [16.5, 283.0], [16.6, 283.0], [16.7, 283.0], [16.8, 283.0], [16.9, 284.0], [17.0, 284.0], [17.1, 284.0], [17.2, 284.0], [17.3, 284.0], [17.4, 284.0], [17.5, 285.0], [17.6, 286.0], [17.7, 286.0], [17.8, 286.0], [17.9, 286.0], [18.0, 287.0], [18.1, 288.0], [18.2, 288.0], [18.3, 288.0], [18.4, 289.0], [18.5, 289.0], [18.6, 289.0], [18.7, 289.0], [18.8, 289.0], [18.9, 289.0], [19.0, 289.0], [19.1, 289.0], [19.2, 290.0], [19.3, 290.0], [19.4, 290.0], [19.5, 291.0], [19.6, 292.0], [19.7, 292.0], [19.8, 293.0], [19.9, 294.0], [20.0, 294.0], [20.1, 294.0], [20.2, 294.0], [20.3, 295.0], [20.4, 295.0], [20.5, 295.0], [20.6, 295.0], [20.7, 296.0], [20.8, 296.0], [20.9, 296.0], [21.0, 296.0], [21.1, 296.0], [21.2, 296.0], [21.3, 297.0], [21.4, 298.0], [21.5, 299.0], [21.6, 299.0], [21.7, 299.0], [21.8, 300.0], [21.9, 300.0], [22.0, 300.0], [22.1, 300.0], [22.2, 301.0], [22.3, 301.0], [22.4, 301.0], [22.5, 302.0], [22.6, 302.0], [22.7, 302.0], [22.8, 302.0], [22.9, 303.0], [23.0, 304.0], [23.1, 304.0], [23.2, 304.0], [23.3, 304.0], [23.4, 304.0], [23.5, 304.0], [23.6, 305.0], [23.7, 305.0], [23.8, 305.0], [23.9, 305.0], [24.0, 307.0], [24.1, 307.0], [24.2, 307.0], [24.3, 307.0], [24.4, 308.0], [24.5, 308.0], [24.6, 308.0], [24.7, 309.0], [24.8, 309.0], [24.9, 309.0], [25.0, 309.0], [25.1, 310.0], [25.2, 310.0], [25.3, 310.0], [25.4, 310.0], [25.5, 314.0], [25.6, 315.0], [25.7, 315.0], [25.8, 316.0], [25.9, 317.0], [26.0, 319.0], [26.1, 319.0], [26.2, 320.0], [26.3, 320.0], [26.4, 321.0], [26.5, 321.0], [26.6, 322.0], [26.7, 322.0], [26.8, 322.0], [26.9, 324.0], [27.0, 324.0], [27.1, 325.0], [27.2, 325.0], [27.3, 326.0], [27.4, 326.0], [27.5, 327.0], [27.6, 327.0], [27.7, 327.0], [27.8, 327.0], [27.9, 328.0], [28.0, 328.0], [28.1, 328.0], [28.2, 330.0], [28.3, 332.0], [28.4, 332.0], [28.5, 333.0], [28.6, 335.0], [28.7, 335.0], [28.8, 336.0], [28.9, 336.0], [29.0, 336.0], [29.1, 336.0], [29.2, 337.0], [29.3, 337.0], [29.4, 342.0], [29.5, 342.0], [29.6, 344.0], [29.7, 345.0], [29.8, 345.0], [29.9, 345.0], [30.0, 346.0], [30.1, 346.0], [30.2, 346.0], [30.3, 346.0], [30.4, 348.0], [30.5, 349.0], [30.6, 349.0], [30.7, 352.0], [30.8, 354.0], [30.9, 354.0], [31.0, 354.0], [31.1, 354.0], [31.2, 355.0], [31.3, 355.0], [31.4, 355.0], [31.5, 357.0], [31.6, 358.0], [31.7, 358.0], [31.8, 359.0], [31.9, 359.0], [32.0, 359.0], [32.1, 359.0], [32.2, 360.0], [32.3, 362.0], [32.4, 362.0], [32.5, 362.0], [32.6, 363.0], [32.7, 363.0], [32.8, 365.0], [32.9, 365.0], [33.0, 367.0], [33.1, 368.0], [33.2, 370.0], [33.3, 370.0], [33.4, 370.0], [33.5, 370.0], [33.6, 370.0], [33.7, 371.0], [33.8, 371.0], [33.9, 372.0], [34.0, 372.0], [34.1, 372.0], [34.2, 373.0], [34.3, 374.0], [34.4, 374.0], [34.5, 375.0], [34.6, 375.0], [34.7, 377.0], [34.8, 377.0], [34.9, 379.0], [35.0, 383.0], [35.1, 383.0], [35.2, 384.0], [35.3, 388.0], [35.4, 388.0], [35.5, 388.0], [35.6, 390.0], [35.7, 390.0], [35.8, 390.0], [35.9, 390.0], [36.0, 391.0], [36.1, 392.0], [36.2, 392.0], [36.3, 392.0], [36.4, 393.0], [36.5, 393.0], [36.6, 395.0], [36.7, 395.0], [36.8, 395.0], [36.9, 395.0], [37.0, 395.0], [37.1, 395.0], [37.2, 395.0], [37.3, 395.0], [37.4, 395.0], [37.5, 395.0], [37.6, 396.0], [37.7, 396.0], [37.8, 396.0], [37.9, 397.0], [38.0, 397.0], [38.1, 398.0], [38.2, 398.0], [38.3, 398.0], [38.4, 398.0], [38.5, 398.0], [38.6, 398.0], [38.7, 398.0], [38.8, 399.0], [38.9, 399.0], [39.0, 399.0], [39.1, 400.0], [39.2, 400.0], [39.3, 400.0], [39.4, 400.0], [39.5, 400.0], [39.6, 400.0], [39.7, 400.0], [39.8, 400.0], [39.9, 401.0], [40.0, 401.0], [40.1, 401.0], [40.2, 401.0], [40.3, 401.0], [40.4, 401.0], [40.5, 401.0], [40.6, 402.0], [40.7, 402.0], [40.8, 402.0], [40.9, 402.0], [41.0, 402.0], [41.1, 402.0], [41.2, 402.0], [41.3, 403.0], [41.4, 403.0], [41.5, 403.0], [41.6, 403.0], [41.7, 403.0], [41.8, 403.0], [41.9, 403.0], [42.0, 403.0], [42.1, 403.0], [42.2, 403.0], [42.3, 403.0], [42.4, 404.0], [42.5, 404.0], [42.6, 405.0], [42.7, 405.0], [42.8, 405.0], [42.9, 405.0], [43.0, 405.0], [43.1, 405.0], [43.2, 406.0], [43.3, 406.0], [43.4, 406.0], [43.5, 406.0], [43.6, 406.0], [43.7, 407.0], [43.8, 407.0], [43.9, 407.0], [44.0, 407.0], [44.1, 407.0], [44.2, 407.0], [44.3, 407.0], [44.4, 407.0], [44.5, 407.0], [44.6, 407.0], [44.7, 407.0], [44.8, 407.0], [44.9, 408.0], [45.0, 408.0], [45.1, 408.0], [45.2, 408.0], [45.3, 408.0], [45.4, 408.0], [45.5, 408.0], [45.6, 408.0], [45.7, 408.0], [45.8, 408.0], [45.9, 408.0], [46.0, 409.0], [46.1, 409.0], [46.2, 409.0], [46.3, 409.0], [46.4, 409.0], [46.5, 409.0], [46.6, 410.0], [46.7, 411.0], [46.8, 411.0], [46.9, 411.0], [47.0, 411.0], [47.1, 412.0], [47.2, 412.0], [47.3, 412.0], [47.4, 412.0], [47.5, 412.0], [47.6, 412.0], [47.7, 412.0], [47.8, 413.0], [47.9, 413.0], [48.0, 413.0], [48.1, 413.0], [48.2, 413.0], [48.3, 414.0], [48.4, 414.0], [48.5, 414.0], [48.6, 414.0], [48.7, 414.0], [48.8, 414.0], [48.9, 415.0], [49.0, 415.0], [49.1, 415.0], [49.2, 415.0], [49.3, 415.0], [49.4, 416.0], [49.5, 416.0], [49.6, 416.0], [49.7, 416.0], [49.8, 417.0], [49.9, 417.0], [50.0, 418.0], [50.1, 418.0], [50.2, 418.0], [50.3, 418.0], [50.4, 418.0], [50.5, 419.0], [50.6, 419.0], [50.7, 419.0], [50.8, 419.0], [50.9, 419.0], [51.0, 419.0], [51.1, 419.0], [51.2, 419.0], [51.3, 420.0], [51.4, 420.0], [51.5, 421.0], [51.6, 421.0], [51.7, 421.0], [51.8, 421.0], [51.9, 422.0], [52.0, 423.0], [52.1, 423.0], [52.2, 424.0], [52.3, 424.0], [52.4, 424.0], [52.5, 424.0], [52.6, 425.0], [52.7, 425.0], [52.8, 426.0], [52.9, 426.0], [53.0, 428.0], [53.1, 429.0], [53.2, 432.0], [53.3, 432.0], [53.4, 433.0], [53.5, 435.0], [53.6, 435.0], [53.7, 436.0], [53.8, 437.0], [53.9, 437.0], [54.0, 437.0], [54.1, 439.0], [54.2, 441.0], [54.3, 441.0], [54.4, 441.0], [54.5, 442.0], [54.6, 442.0], [54.7, 443.0], [54.8, 443.0], [54.9, 444.0], [55.0, 445.0], [55.1, 445.0], [55.2, 446.0], [55.3, 448.0], [55.4, 449.0], [55.5, 449.0], [55.6, 449.0], [55.7, 451.0], [55.8, 451.0], [55.9, 451.0], [56.0, 451.0], [56.1, 452.0], [56.2, 454.0], [56.3, 454.0], [56.4, 454.0], [56.5, 456.0], [56.6, 457.0], [56.7, 457.0], [56.8, 457.0], [56.9, 457.0], [57.0, 457.0], [57.1, 457.0], [57.2, 457.0], [57.3, 458.0], [57.4, 458.0], [57.5, 458.0], [57.6, 459.0], [57.7, 460.0], [57.8, 460.0], [57.9, 460.0], [58.0, 461.0], [58.1, 461.0], [58.2, 461.0], [58.3, 462.0], [58.4, 463.0], [58.5, 463.0], [58.6, 463.0], [58.7, 463.0], [58.8, 464.0], [58.9, 464.0], [59.0, 464.0], [59.1, 464.0], [59.2, 465.0], [59.3, 465.0], [59.4, 466.0], [59.5, 468.0], [59.6, 469.0], [59.7, 469.0], [59.8, 469.0], [59.9, 470.0], [60.0, 470.0], [60.1, 470.0], [60.2, 470.0], [60.3, 470.0], [60.4, 470.0], [60.5, 470.0], [60.6, 470.0], [60.7, 471.0], [60.8, 471.0], [60.9, 471.0], [61.0, 473.0], [61.1, 473.0], [61.2, 473.0], [61.3, 475.0], [61.4, 475.0], [61.5, 477.0], [61.6, 477.0], [61.7, 479.0], [61.8, 480.0], [61.9, 480.0], [62.0, 480.0], [62.1, 481.0], [62.2, 482.0], [62.3, 482.0], [62.4, 482.0], [62.5, 486.0], [62.6, 487.0], [62.7, 487.0], [62.8, 487.0], [62.9, 488.0], [63.0, 493.0], [63.1, 493.0], [63.2, 494.0], [63.3, 495.0], [63.4, 495.0], [63.5, 495.0], [63.6, 495.0], [63.7, 495.0], [63.8, 495.0], [63.9, 496.0], [64.0, 498.0], [64.1, 501.0], [64.2, 501.0], [64.3, 503.0], [64.4, 505.0], [64.5, 505.0], [64.6, 505.0], [64.7, 506.0], [64.8, 511.0], [64.9, 517.0], [65.0, 517.0], [65.1, 517.0], [65.2, 521.0], [65.3, 521.0], [65.4, 522.0], [65.5, 523.0], [65.6, 523.0], [65.7, 523.0], [65.8, 524.0], [65.9, 525.0], [66.0, 525.0], [66.1, 525.0], [66.2, 525.0], [66.3, 525.0], [66.4, 525.0], [66.5, 525.0], [66.6, 526.0], [66.7, 527.0], [66.8, 527.0], [66.9, 527.0], [67.0, 527.0], [67.1, 528.0], [67.2, 528.0], [67.3, 529.0], [67.4, 529.0], [67.5, 530.0], [67.6, 530.0], [67.7, 530.0], [67.8, 532.0], [67.9, 533.0], [68.0, 533.0], [68.1, 533.0], [68.2, 533.0], [68.3, 534.0], [68.4, 534.0], [68.5, 534.0], [68.6, 534.0], [68.7, 534.0], [68.8, 534.0], [68.9, 535.0], [69.0, 535.0], [69.1, 535.0], [69.2, 536.0], [69.3, 536.0], [69.4, 536.0], [69.5, 536.0], [69.6, 537.0], [69.7, 537.0], [69.8, 538.0], [69.9, 538.0], [70.0, 538.0], [70.1, 539.0], [70.2, 539.0], [70.3, 539.0], [70.4, 539.0], [70.5, 540.0], [70.6, 540.0], [70.7, 540.0], [70.8, 541.0], [70.9, 542.0], [71.0, 542.0], [71.1, 542.0], [71.2, 542.0], [71.3, 542.0], [71.4, 542.0], [71.5, 543.0], [71.6, 543.0], [71.7, 543.0], [71.8, 544.0], [71.9, 545.0], [72.0, 546.0], [72.1, 546.0], [72.2, 547.0], [72.3, 548.0], [72.4, 548.0], [72.5, 548.0], [72.6, 549.0], [72.7, 549.0], [72.8, 550.0], [72.9, 550.0], [73.0, 550.0], [73.1, 551.0], [73.2, 552.0], [73.3, 552.0], [73.4, 552.0], [73.5, 554.0], [73.6, 554.0], [73.7, 555.0], [73.8, 555.0], [73.9, 555.0], [74.0, 555.0], [74.1, 555.0], [74.2, 555.0], [74.3, 556.0], [74.4, 556.0], [74.5, 560.0], [74.6, 566.0], [74.7, 567.0], [74.8, 567.0], [74.9, 567.0], [75.0, 567.0], [75.1, 567.0], [75.2, 570.0], [75.3, 570.0], [75.4, 570.0], [75.5, 570.0], [75.6, 571.0], [75.7, 573.0], [75.8, 575.0], [75.9, 575.0], [76.0, 575.0], [76.1, 575.0], [76.2, 576.0], [76.3, 576.0], [76.4, 576.0], [76.5, 577.0], [76.6, 579.0], [76.7, 579.0], [76.8, 580.0], [76.9, 580.0], [77.0, 580.0], [77.1, 580.0], [77.2, 581.0], [77.3, 583.0], [77.4, 583.0], [77.5, 584.0], [77.6, 584.0], [77.7, 586.0], [77.8, 586.0], [77.9, 587.0], [78.0, 589.0], [78.1, 589.0], [78.2, 589.0], [78.3, 591.0], [78.4, 591.0], [78.5, 591.0], [78.6, 592.0], [78.7, 593.0], [78.8, 594.0], [78.9, 594.0], [79.0, 595.0], [79.1, 595.0], [79.2, 596.0], [79.3, 596.0], [79.4, 597.0], [79.5, 598.0], [79.6, 601.0], [79.7, 601.0], [79.8, 604.0], [79.9, 604.0], [80.0, 608.0], [80.1, 608.0], [80.2, 608.0], [80.3, 610.0], [80.4, 610.0], [80.5, 612.0], [80.6, 612.0], [80.7, 613.0], [80.8, 613.0], [80.9, 613.0], [81.0, 614.0], [81.1, 614.0], [81.2, 614.0], [81.3, 615.0], [81.4, 618.0], [81.5, 619.0], [81.6, 619.0], [81.7, 620.0], [81.8, 620.0], [81.9, 620.0], [82.0, 622.0], [82.1, 624.0], [82.2, 626.0], [82.3, 626.0], [82.4, 626.0], [82.5, 626.0], [82.6, 630.0], [82.7, 630.0], [82.8, 631.0], [82.9, 636.0], [83.0, 636.0], [83.1, 636.0], [83.2, 638.0], [83.3, 639.0], [83.4, 639.0], [83.5, 639.0], [83.6, 641.0], [83.7, 642.0], [83.8, 642.0], [83.9, 642.0], [84.0, 643.0], [84.1, 644.0], [84.2, 644.0], [84.3, 645.0], [84.4, 646.0], [84.5, 647.0], [84.6, 647.0], [84.7, 649.0], [84.8, 651.0], [84.9, 651.0], [85.0, 651.0], [85.1, 651.0], [85.2, 651.0], [85.3, 651.0], [85.4, 653.0], [85.5, 653.0], [85.6, 654.0], [85.7, 654.0], [85.8, 656.0], [85.9, 656.0], [86.0, 660.0], [86.1, 660.0], [86.2, 660.0], [86.3, 660.0], [86.4, 664.0], [86.5, 664.0], [86.6, 665.0], [86.7, 665.0], [86.8, 665.0], [86.9, 667.0], [87.0, 670.0], [87.1, 670.0], [87.2, 670.0], [87.3, 671.0], [87.4, 672.0], [87.5, 673.0], [87.6, 673.0], [87.7, 674.0], [87.8, 676.0], [87.9, 677.0], [88.0, 677.0], [88.1, 682.0], [88.2, 686.0], [88.3, 686.0], [88.4, 686.0], [88.5, 687.0], [88.6, 688.0], [88.7, 688.0], [88.8, 689.0], [88.9, 693.0], [89.0, 695.0], [89.1, 695.0], [89.2, 699.0], [89.3, 700.0], [89.4, 701.0], [89.5, 701.0], [89.6, 702.0], [89.7, 702.0], [89.8, 705.0], [89.9, 705.0], [90.0, 706.0], [90.1, 706.0], [90.2, 706.0], [90.3, 715.0], [90.4, 717.0], [90.5, 721.0], [90.6, 721.0], [90.7, 725.0], [90.8, 731.0], [90.9, 731.0], [91.0, 731.0], [91.1, 732.0], [91.2, 733.0], [91.3, 734.0], [91.4, 734.0], [91.5, 735.0], [91.6, 737.0], [91.7, 737.0], [91.8, 741.0], [91.9, 741.0], [92.0, 743.0], [92.1, 743.0], [92.2, 746.0], [92.3, 747.0], [92.4, 748.0], [92.5, 748.0], [92.6, 749.0], [92.7, 750.0], [92.8, 752.0], [92.9, 752.0], [93.0, 754.0], [93.1, 757.0], [93.2, 761.0], [93.3, 761.0], [93.4, 772.0], [93.5, 793.0], [93.6, 793.0], [93.7, 794.0], [93.8, 796.0], [93.9, 807.0], [94.0, 807.0], [94.1, 817.0], [94.2, 823.0], [94.3, 823.0], [94.4, 823.0], [94.5, 829.0], [94.6, 830.0], [94.7, 831.0], [94.8, 831.0], [94.9, 849.0], [95.0, 850.0], [95.1, 850.0], [95.2, 850.0], [95.3, 857.0], [95.4, 860.0], [95.5, 860.0], [95.6, 868.0], [95.7, 881.0], [95.8, 901.0], [95.9, 901.0], [96.0, 902.0], [96.1, 914.0], [96.2, 914.0], [96.3, 914.0], [96.4, 929.0], [96.5, 965.0], [96.6, 966.0], [96.7, 966.0], [96.8, 970.0], [96.9, 978.0], [97.0, 978.0], [97.1, 998.0], [97.2, 998.0], [97.3, 999.0], [97.4, 999.0], [97.5, 1003.0], [97.6, 1008.0], [97.7, 1038.0], [97.8, 1038.0], [97.9, 1042.0], [98.0, 1053.0], [98.1, 1122.0], [98.2, 1122.0], [98.3, 1129.0], [98.4, 1159.0], [98.5, 1159.0], [98.6, 1217.0], [98.7, 1225.0], [98.8, 1227.0], [98.9, 1227.0], [99.0, 1281.0], [99.1, 1281.0], [99.2, 1615.0], [99.3, 1615.0], [99.4, 1652.0], [99.5, 1663.0], [99.6, 2750.0], [99.7, 2750.0], [99.8, 2757.0], [99.9, 2986.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 184.0, "series": [{"data": [[600.0, 71.0], [2700.0, 2.0], [700.0, 34.0], [2900.0, 1.0], [200.0, 143.0], [800.0, 14.0], [900.0, 12.0], [1000.0, 5.0], [1100.0, 3.0], [1200.0, 5.0], [300.0, 127.0], [400.0, 184.0], [100.0, 17.0], [1600.0, 3.0], [500.0, 114.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 471.0, "series": [{"data": [[0.0, 471.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 258.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60422378E12, "maxY": 1.0, "series": [{"data": [[1.6042239E12, 1.0], [1.60422384E12, 1.0], [1.60422402E12, 1.0], [1.60422396E12, 1.0], [1.60422408E12, 1.0], [1.60422378E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422408E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 475.6013605442175, "minX": 1.0, "maxY": 475.6013605442175, "series": [{"data": [[1.0, 475.6013605442175]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 475.6013605442175]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 756.65, "minX": 1.60422378E12, "maxY": 386825.9666666667, "series": [{"data": [[1.6042239E12, 301287.1], [1.60422384E12, 270062.8333333333], [1.60422402E12, 269418.4], [1.60422396E12, 325389.85], [1.60422408E12, 282784.9], [1.60422378E12, 386825.9666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042239E12, 1103.8], [1.60422384E12, 877.9833333333333], [1.60422402E12, 847.2666666666667], [1.60422396E12, 916.9666666666667], [1.60422408E12, 1020.3666666666667], [1.60422378E12, 756.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422408E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 405.21621621621625, "minX": 1.60422378E12, "maxY": 532.6160714285713, "series": [{"data": [[1.6042239E12, 405.21621621621625], [1.60422384E12, 518.1982758620687], [1.60422402E12, 532.6160714285713], [1.60422396E12, 488.92622950819646], [1.60422408E12, 415.94160583941596], [1.60422378E12, 531.98]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422408E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 404.29054054054046, "minX": 1.60422378E12, "maxY": 531.3928571428571, "series": [{"data": [[1.6042239E12, 404.29054054054046], [1.60422384E12, 517.0172413793102], [1.60422402E12, 531.3928571428571], [1.60422396E12, 487.795081967213], [1.60422408E12, 414.97810218978117], [1.60422378E12, 530.6299999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422408E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013513513513513518, "minX": 1.60422378E12, "maxY": 0.35, "series": [{"data": [[1.6042239E12, 0.013513513513513518], [1.60422384E12, 0.04310344827586207], [1.60422402E12, 0.01785714285714286], [1.60422396E12, 0.016393442622950824], [1.60422408E12, 0.036496350364963515], [1.60422378E12, 0.35]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422408E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60422378E12, "maxY": 2986.0, "series": [{"data": [[1.6042239E12, 1615.0], [1.60422384E12, 857.0], [1.60422402E12, 881.0], [1.60422396E12, 2986.0], [1.60422408E12, 1663.0], [1.60422378E12, 2757.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042239E12, 176.70499982237817], [1.60422384E12, 337.4309992468357], [1.60422402E12, 274.5269991648197], [1.60422396E12, 190.21399994134902], [1.60422408E12, 188.0], [1.60422378E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042239E12, 177.37550007104875], [1.60422384E12, 340.2741003012657], [1.60422402E12, 277.6797003340721], [1.60422396E12, 190.43540002346037], [1.60422408E12, 188.0], [1.60422378E12, 196.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042239E12, 177.07749991118908], [1.60422384E12, 339.01049962341784], [1.60422402E12, 276.27849958240984], [1.60422396E12, 190.33699997067453], [1.60422408E12, 188.0], [1.60422378E12, 196.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042239E12, 175.0], [1.60422384E12, 336.0], [1.60422402E12, 274.0], [1.60422396E12, 190.0], [1.60422408E12, 188.0], [1.60422378E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042239E12, 324.5], [1.60422384E12, 476.5], [1.60422402E12, 528.0], [1.60422396E12, 415.0], [1.60422408E12, 320.0], [1.60422378E12, 409.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422408E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 204.0, "minX": 1.0, "maxY": 653.0, "series": [{"data": [[1.0, 653.0], [2.0, 523.0], [4.0, 290.5], [5.0, 204.0], [3.0, 336.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 203.0, "minX": 1.0, "maxY": 652.0, "series": [{"data": [[1.0, 652.0], [2.0, 521.5], [4.0, 290.0], [5.0, 203.0], [3.0, 336.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60422378E12, "maxY": 2.466666666666667, "series": [{"data": [[1.6042239E12, 2.466666666666667], [1.60422384E12, 1.9333333333333333], [1.60422402E12, 1.8666666666666667], [1.60422396E12, 2.033333333333333], [1.60422408E12, 2.2666666666666666], [1.60422378E12, 1.6833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422408E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60422378E12, "maxY": 2.466666666666667, "series": [{"data": [[1.6042239E12, 2.466666666666667], [1.60422384E12, 1.9333333333333333], [1.60422402E12, 1.8666666666666667], [1.60422396E12, 2.033333333333333], [1.60422408E12, 2.283333333333333], [1.60422378E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422408E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60422378E12, "maxY": 2.466666666666667, "series": [{"data": [[1.6042239E12, 2.466666666666667], [1.60422384E12, 1.9333333333333333], [1.60422402E12, 1.8666666666666667], [1.60422396E12, 2.033333333333333], [1.60422408E12, 2.283333333333333], [1.60422378E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422408E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60422378E12, "maxY": 2.466666666666667, "series": [{"data": [[1.6042239E12, 2.466666666666667], [1.60422384E12, 1.9333333333333333], [1.60422402E12, 1.8666666666666667], [1.60422396E12, 2.033333333333333], [1.60422408E12, 2.283333333333333], [1.60422378E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422408E12, "title": "Total Transactions Per Second"}},
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

