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
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 2869.0, "series": [{"data": [[0.0, 185.0], [0.1, 185.0], [0.2, 189.0], [0.3, 190.0], [0.4, 190.0], [0.5, 192.0], [0.6, 194.0], [0.7, 195.0], [0.8, 195.0], [0.9, 195.0], [1.0, 197.0], [1.1, 197.0], [1.2, 197.0], [1.3, 197.0], [1.4, 198.0], [1.5, 199.0], [1.6, 199.0], [1.7, 199.0], [1.8, 201.0], [1.9, 201.0], [2.0, 201.0], [2.1, 203.0], [2.2, 204.0], [2.3, 204.0], [2.4, 204.0], [2.5, 205.0], [2.6, 206.0], [2.7, 206.0], [2.8, 207.0], [2.9, 207.0], [3.0, 207.0], [3.1, 207.0], [3.2, 207.0], [3.3, 208.0], [3.4, 208.0], [3.5, 208.0], [3.6, 208.0], [3.7, 209.0], [3.8, 209.0], [3.9, 210.0], [4.0, 210.0], [4.1, 210.0], [4.2, 210.0], [4.3, 211.0], [4.4, 212.0], [4.5, 212.0], [4.6, 212.0], [4.7, 213.0], [4.8, 213.0], [4.9, 214.0], [5.0, 214.0], [5.1, 217.0], [5.2, 217.0], [5.3, 217.0], [5.4, 217.0], [5.5, 218.0], [5.6, 219.0], [5.7, 219.0], [5.8, 219.0], [5.9, 219.0], [6.0, 221.0], [6.1, 221.0], [6.2, 224.0], [6.3, 225.0], [6.4, 225.0], [6.5, 225.0], [6.6, 227.0], [6.7, 227.0], [6.8, 227.0], [6.9, 227.0], [7.0, 228.0], [7.1, 230.0], [7.2, 230.0], [7.3, 230.0], [7.4, 234.0], [7.5, 238.0], [7.6, 238.0], [7.7, 239.0], [7.8, 241.0], [7.9, 243.0], [8.0, 243.0], [8.1, 243.0], [8.2, 245.0], [8.3, 246.0], [8.4, 246.0], [8.5, 247.0], [8.6, 247.0], [8.7, 247.0], [8.8, 249.0], [8.9, 249.0], [9.0, 250.0], [9.1, 250.0], [9.2, 250.0], [9.3, 250.0], [9.4, 250.0], [9.5, 250.0], [9.6, 251.0], [9.7, 251.0], [9.8, 251.0], [9.9, 251.0], [10.0, 252.0], [10.1, 252.0], [10.2, 252.0], [10.3, 252.0], [10.4, 252.0], [10.5, 253.0], [10.6, 253.0], [10.7, 253.0], [10.8, 254.0], [10.9, 256.0], [11.0, 256.0], [11.1, 256.0], [11.2, 256.0], [11.3, 256.0], [11.4, 256.0], [11.5, 257.0], [11.6, 257.0], [11.7, 257.0], [11.8, 257.0], [11.9, 258.0], [12.0, 259.0], [12.1, 259.0], [12.2, 259.0], [12.3, 259.0], [12.4, 260.0], [12.5, 260.0], [12.6, 260.0], [12.7, 260.0], [12.8, 261.0], [12.9, 261.0], [13.0, 261.0], [13.1, 262.0], [13.2, 262.0], [13.3, 262.0], [13.4, 262.0], [13.5, 263.0], [13.6, 263.0], [13.7, 264.0], [13.8, 264.0], [13.9, 264.0], [14.0, 264.0], [14.1, 264.0], [14.2, 265.0], [14.3, 266.0], [14.4, 266.0], [14.5, 266.0], [14.6, 266.0], [14.7, 267.0], [14.8, 267.0], [14.9, 267.0], [15.0, 267.0], [15.1, 267.0], [15.2, 267.0], [15.3, 268.0], [15.4, 269.0], [15.5, 269.0], [15.6, 270.0], [15.7, 270.0], [15.8, 270.0], [15.9, 270.0], [16.0, 271.0], [16.1, 271.0], [16.2, 272.0], [16.3, 272.0], [16.4, 272.0], [16.5, 273.0], [16.6, 273.0], [16.7, 273.0], [16.8, 273.0], [16.9, 274.0], [17.0, 274.0], [17.1, 274.0], [17.2, 275.0], [17.3, 275.0], [17.4, 275.0], [17.5, 275.0], [17.6, 275.0], [17.7, 276.0], [17.8, 276.0], [17.9, 277.0], [18.0, 277.0], [18.1, 277.0], [18.2, 277.0], [18.3, 278.0], [18.4, 278.0], [18.5, 278.0], [18.6, 278.0], [18.7, 279.0], [18.8, 279.0], [18.9, 279.0], [19.0, 279.0], [19.1, 280.0], [19.2, 280.0], [19.3, 280.0], [19.4, 281.0], [19.5, 281.0], [19.6, 282.0], [19.7, 282.0], [19.8, 283.0], [19.9, 284.0], [20.0, 284.0], [20.1, 284.0], [20.2, 284.0], [20.3, 284.0], [20.4, 284.0], [20.5, 284.0], [20.6, 285.0], [20.7, 285.0], [20.8, 285.0], [20.9, 285.0], [21.0, 285.0], [21.1, 286.0], [21.2, 286.0], [21.3, 286.0], [21.4, 286.0], [21.5, 286.0], [21.6, 286.0], [21.7, 286.0], [21.8, 287.0], [21.9, 287.0], [22.0, 287.0], [22.1, 288.0], [22.2, 288.0], [22.3, 288.0], [22.4, 288.0], [22.5, 288.0], [22.6, 289.0], [22.7, 289.0], [22.8, 290.0], [22.9, 290.0], [23.0, 290.0], [23.1, 290.0], [23.2, 291.0], [23.3, 291.0], [23.4, 291.0], [23.5, 292.0], [23.6, 292.0], [23.7, 293.0], [23.8, 293.0], [23.9, 293.0], [24.0, 293.0], [24.1, 294.0], [24.2, 294.0], [24.3, 294.0], [24.4, 294.0], [24.5, 295.0], [24.6, 295.0], [24.7, 295.0], [24.8, 296.0], [24.9, 296.0], [25.0, 296.0], [25.1, 297.0], [25.2, 297.0], [25.3, 297.0], [25.4, 298.0], [25.5, 298.0], [25.6, 298.0], [25.7, 298.0], [25.8, 298.0], [25.9, 300.0], [26.0, 300.0], [26.1, 300.0], [26.2, 301.0], [26.3, 301.0], [26.4, 301.0], [26.5, 301.0], [26.6, 302.0], [26.7, 303.0], [26.8, 303.0], [26.9, 303.0], [27.0, 304.0], [27.1, 305.0], [27.2, 305.0], [27.3, 305.0], [27.4, 308.0], [27.5, 310.0], [27.6, 310.0], [27.7, 311.0], [27.8, 311.0], [27.9, 312.0], [28.0, 312.0], [28.1, 312.0], [28.2, 313.0], [28.3, 313.0], [28.4, 313.0], [28.5, 315.0], [28.6, 319.0], [28.7, 319.0], [28.8, 319.0], [28.9, 320.0], [29.0, 320.0], [29.1, 320.0], [29.2, 322.0], [29.3, 326.0], [29.4, 328.0], [29.5, 328.0], [29.6, 329.0], [29.7, 336.0], [29.8, 338.0], [29.9, 338.0], [30.0, 340.0], [30.1, 344.0], [30.2, 344.0], [30.3, 346.0], [30.4, 347.0], [30.5, 347.0], [30.6, 347.0], [30.7, 347.0], [30.8, 348.0], [30.9, 348.0], [31.0, 348.0], [31.1, 350.0], [31.2, 350.0], [31.3, 352.0], [31.4, 352.0], [31.5, 355.0], [31.6, 355.0], [31.7, 355.0], [31.8, 355.0], [31.9, 355.0], [32.0, 356.0], [32.1, 356.0], [32.2, 357.0], [32.3, 359.0], [32.4, 360.0], [32.5, 360.0], [32.6, 360.0], [32.7, 360.0], [32.8, 360.0], [32.9, 360.0], [33.0, 361.0], [33.1, 361.0], [33.2, 361.0], [33.3, 361.0], [33.4, 361.0], [33.5, 362.0], [33.6, 362.0], [33.7, 363.0], [33.8, 364.0], [33.9, 364.0], [34.0, 364.0], [34.1, 365.0], [34.2, 365.0], [34.3, 366.0], [34.4, 366.0], [34.5, 367.0], [34.6, 367.0], [34.7, 367.0], [34.8, 367.0], [34.9, 367.0], [35.0, 370.0], [35.1, 370.0], [35.2, 371.0], [35.3, 373.0], [35.4, 374.0], [35.5, 374.0], [35.6, 375.0], [35.7, 375.0], [35.8, 375.0], [35.9, 375.0], [36.0, 375.0], [36.1, 375.0], [36.2, 375.0], [36.3, 375.0], [36.4, 376.0], [36.5, 377.0], [36.6, 377.0], [36.7, 377.0], [36.8, 377.0], [36.9, 378.0], [37.0, 378.0], [37.1, 379.0], [37.2, 379.0], [37.3, 380.0], [37.4, 380.0], [37.5, 380.0], [37.6, 380.0], [37.7, 381.0], [37.8, 381.0], [37.9, 381.0], [38.0, 382.0], [38.1, 382.0], [38.2, 382.0], [38.3, 383.0], [38.4, 383.0], [38.5, 383.0], [38.6, 383.0], [38.7, 383.0], [38.8, 383.0], [38.9, 383.0], [39.0, 384.0], [39.1, 384.0], [39.2, 384.0], [39.3, 384.0], [39.4, 384.0], [39.5, 385.0], [39.6, 385.0], [39.7, 385.0], [39.8, 385.0], [39.9, 385.0], [40.0, 385.0], [40.1, 385.0], [40.2, 385.0], [40.3, 385.0], [40.4, 385.0], [40.5, 386.0], [40.6, 386.0], [40.7, 386.0], [40.8, 386.0], [40.9, 387.0], [41.0, 387.0], [41.1, 387.0], [41.2, 387.0], [41.3, 387.0], [41.4, 387.0], [41.5, 388.0], [41.6, 388.0], [41.7, 388.0], [41.8, 389.0], [41.9, 389.0], [42.0, 389.0], [42.1, 389.0], [42.2, 389.0], [42.3, 389.0], [42.4, 389.0], [42.5, 389.0], [42.6, 390.0], [42.7, 390.0], [42.8, 390.0], [42.9, 390.0], [43.0, 390.0], [43.1, 390.0], [43.2, 390.0], [43.3, 390.0], [43.4, 390.0], [43.5, 390.0], [43.6, 390.0], [43.7, 391.0], [43.8, 391.0], [43.9, 391.0], [44.0, 391.0], [44.1, 391.0], [44.2, 391.0], [44.3, 391.0], [44.4, 391.0], [44.5, 392.0], [44.6, 392.0], [44.7, 392.0], [44.8, 392.0], [44.9, 392.0], [45.0, 392.0], [45.1, 392.0], [45.2, 392.0], [45.3, 392.0], [45.4, 393.0], [45.5, 393.0], [45.6, 393.0], [45.7, 393.0], [45.8, 393.0], [45.9, 394.0], [46.0, 394.0], [46.1, 394.0], [46.2, 394.0], [46.3, 395.0], [46.4, 395.0], [46.5, 395.0], [46.6, 395.0], [46.7, 396.0], [46.8, 396.0], [46.9, 396.0], [47.0, 396.0], [47.1, 396.0], [47.2, 396.0], [47.3, 397.0], [47.4, 398.0], [47.5, 398.0], [47.6, 398.0], [47.7, 398.0], [47.8, 398.0], [47.9, 398.0], [48.0, 398.0], [48.1, 398.0], [48.2, 398.0], [48.3, 399.0], [48.4, 399.0], [48.5, 399.0], [48.6, 400.0], [48.7, 400.0], [48.8, 400.0], [48.9, 402.0], [49.0, 402.0], [49.1, 402.0], [49.2, 402.0], [49.3, 402.0], [49.4, 402.0], [49.5, 402.0], [49.6, 402.0], [49.7, 402.0], [49.8, 403.0], [49.9, 403.0], [50.0, 403.0], [50.1, 403.0], [50.2, 403.0], [50.3, 403.0], [50.4, 404.0], [50.5, 405.0], [50.6, 405.0], [50.7, 405.0], [50.8, 406.0], [50.9, 406.0], [51.0, 406.0], [51.1, 407.0], [51.2, 407.0], [51.3, 407.0], [51.4, 407.0], [51.5, 408.0], [51.6, 408.0], [51.7, 408.0], [51.8, 408.0], [51.9, 409.0], [52.0, 409.0], [52.1, 409.0], [52.2, 410.0], [52.3, 410.0], [52.4, 410.0], [52.5, 410.0], [52.6, 410.0], [52.7, 411.0], [52.8, 411.0], [52.9, 411.0], [53.0, 412.0], [53.1, 414.0], [53.2, 415.0], [53.3, 415.0], [53.4, 415.0], [53.5, 415.0], [53.6, 415.0], [53.7, 416.0], [53.8, 416.0], [53.9, 416.0], [54.0, 416.0], [54.1, 419.0], [54.2, 420.0], [54.3, 421.0], [54.4, 421.0], [54.5, 421.0], [54.6, 422.0], [54.7, 426.0], [54.8, 426.0], [54.9, 426.0], [55.0, 427.0], [55.1, 427.0], [55.2, 427.0], [55.3, 433.0], [55.4, 433.0], [55.5, 433.0], [55.6, 436.0], [55.7, 436.0], [55.8, 436.0], [55.9, 436.0], [56.0, 437.0], [56.1, 438.0], [56.2, 439.0], [56.3, 439.0], [56.4, 439.0], [56.5, 440.0], [56.6, 440.0], [56.7, 440.0], [56.8, 442.0], [56.9, 443.0], [57.0, 443.0], [57.1, 443.0], [57.2, 444.0], [57.3, 444.0], [57.4, 444.0], [57.5, 447.0], [57.6, 447.0], [57.7, 447.0], [57.8, 447.0], [57.9, 447.0], [58.0, 448.0], [58.1, 449.0], [58.2, 449.0], [58.3, 449.0], [58.4, 452.0], [58.5, 452.0], [58.6, 453.0], [58.7, 453.0], [58.8, 454.0], [58.9, 454.0], [59.0, 455.0], [59.1, 457.0], [59.2, 458.0], [59.3, 458.0], [59.4, 459.0], [59.5, 459.0], [59.6, 459.0], [59.7, 459.0], [59.8, 459.0], [59.9, 459.0], [60.0, 459.0], [60.1, 459.0], [60.2, 462.0], [60.3, 462.0], [60.4, 462.0], [60.5, 464.0], [60.6, 464.0], [60.7, 465.0], [60.8, 465.0], [60.9, 465.0], [61.0, 467.0], [61.1, 468.0], [61.2, 468.0], [61.3, 469.0], [61.4, 469.0], [61.5, 469.0], [61.6, 469.0], [61.7, 470.0], [61.8, 471.0], [61.9, 471.0], [62.0, 473.0], [62.1, 473.0], [62.2, 474.0], [62.3, 474.0], [62.4, 474.0], [62.5, 475.0], [62.6, 477.0], [62.7, 477.0], [62.8, 479.0], [62.9, 480.0], [63.0, 480.0], [63.1, 480.0], [63.2, 484.0], [63.3, 486.0], [63.4, 486.0], [63.5, 487.0], [63.6, 487.0], [63.7, 488.0], [63.8, 488.0], [63.9, 490.0], [64.0, 491.0], [64.1, 494.0], [64.2, 494.0], [64.3, 499.0], [64.4, 500.0], [64.5, 500.0], [64.6, 500.0], [64.7, 503.0], [64.8, 503.0], [64.9, 503.0], [65.0, 503.0], [65.1, 505.0], [65.2, 505.0], [65.3, 505.0], [65.4, 506.0], [65.5, 506.0], [65.6, 507.0], [65.7, 507.0], [65.8, 508.0], [65.9, 508.0], [66.0, 509.0], [66.1, 509.0], [66.2, 510.0], [66.3, 510.0], [66.4, 510.0], [66.5, 510.0], [66.6, 512.0], [66.7, 512.0], [66.8, 512.0], [66.9, 514.0], [67.0, 514.0], [67.1, 514.0], [67.2, 514.0], [67.3, 515.0], [67.4, 516.0], [67.5, 517.0], [67.6, 517.0], [67.7, 517.0], [67.8, 518.0], [67.9, 519.0], [68.0, 519.0], [68.1, 519.0], [68.2, 519.0], [68.3, 520.0], [68.4, 520.0], [68.5, 521.0], [68.6, 521.0], [68.7, 521.0], [68.8, 521.0], [68.9, 522.0], [69.0, 523.0], [69.1, 523.0], [69.2, 524.0], [69.3, 524.0], [69.4, 524.0], [69.5, 524.0], [69.6, 524.0], [69.7, 525.0], [69.8, 525.0], [69.9, 525.0], [70.0, 525.0], [70.1, 525.0], [70.2, 525.0], [70.3, 526.0], [70.4, 526.0], [70.5, 527.0], [70.6, 527.0], [70.7, 527.0], [70.8, 528.0], [70.9, 529.0], [71.0, 529.0], [71.1, 531.0], [71.2, 531.0], [71.3, 531.0], [71.4, 531.0], [71.5, 533.0], [71.6, 534.0], [71.7, 534.0], [71.8, 536.0], [71.9, 536.0], [72.0, 537.0], [72.1, 537.0], [72.2, 537.0], [72.3, 537.0], [72.4, 538.0], [72.5, 538.0], [72.6, 538.0], [72.7, 538.0], [72.8, 540.0], [72.9, 540.0], [73.0, 541.0], [73.1, 543.0], [73.2, 544.0], [73.3, 544.0], [73.4, 544.0], [73.5, 545.0], [73.6, 545.0], [73.7, 545.0], [73.8, 546.0], [73.9, 546.0], [74.0, 546.0], [74.1, 547.0], [74.2, 548.0], [74.3, 549.0], [74.4, 549.0], [74.5, 550.0], [74.6, 550.0], [74.7, 552.0], [74.8, 552.0], [74.9, 554.0], [75.0, 554.0], [75.1, 554.0], [75.2, 555.0], [75.3, 557.0], [75.4, 557.0], [75.5, 557.0], [75.6, 560.0], [75.7, 560.0], [75.8, 561.0], [75.9, 561.0], [76.0, 561.0], [76.1, 562.0], [76.2, 562.0], [76.3, 562.0], [76.4, 563.0], [76.5, 565.0], [76.6, 566.0], [76.7, 566.0], [76.8, 568.0], [76.9, 568.0], [77.0, 568.0], [77.1, 568.0], [77.2, 569.0], [77.3, 570.0], [77.4, 570.0], [77.5, 570.0], [77.6, 572.0], [77.7, 574.0], [77.8, 574.0], [77.9, 574.0], [78.0, 575.0], [78.1, 575.0], [78.2, 575.0], [78.3, 576.0], [78.4, 577.0], [78.5, 577.0], [78.6, 577.0], [78.7, 577.0], [78.8, 578.0], [78.9, 578.0], [79.0, 579.0], [79.1, 579.0], [79.2, 579.0], [79.3, 579.0], [79.4, 582.0], [79.5, 583.0], [79.6, 584.0], [79.7, 584.0], [79.8, 585.0], [79.9, 587.0], [80.0, 588.0], [80.1, 588.0], [80.2, 590.0], [80.3, 590.0], [80.4, 590.0], [80.5, 591.0], [80.6, 592.0], [80.7, 594.0], [80.8, 594.0], [80.9, 595.0], [81.0, 598.0], [81.1, 601.0], [81.2, 601.0], [81.3, 605.0], [81.4, 606.0], [81.5, 606.0], [81.6, 606.0], [81.7, 607.0], [81.8, 607.0], [81.9, 607.0], [82.0, 609.0], [82.1, 612.0], [82.2, 613.0], [82.3, 613.0], [82.4, 614.0], [82.5, 616.0], [82.6, 618.0], [82.7, 618.0], [82.8, 619.0], [82.9, 620.0], [83.0, 623.0], [83.1, 623.0], [83.2, 623.0], [83.3, 625.0], [83.4, 625.0], [83.5, 627.0], [83.6, 627.0], [83.7, 629.0], [83.8, 629.0], [83.9, 630.0], [84.0, 633.0], [84.1, 633.0], [84.2, 633.0], [84.3, 634.0], [84.4, 634.0], [84.5, 636.0], [84.6, 636.0], [84.7, 638.0], [84.8, 640.0], [84.9, 640.0], [85.0, 640.0], [85.1, 640.0], [85.2, 640.0], [85.3, 640.0], [85.4, 641.0], [85.5, 641.0], [85.6, 642.0], [85.7, 642.0], [85.8, 643.0], [85.9, 644.0], [86.0, 644.0], [86.1, 644.0], [86.2, 645.0], [86.3, 645.0], [86.4, 646.0], [86.5, 646.0], [86.6, 650.0], [86.7, 651.0], [86.8, 651.0], [86.9, 652.0], [87.0, 652.0], [87.1, 652.0], [87.2, 652.0], [87.3, 653.0], [87.4, 654.0], [87.5, 654.0], [87.6, 654.0], [87.7, 656.0], [87.8, 658.0], [87.9, 663.0], [88.0, 663.0], [88.1, 665.0], [88.2, 665.0], [88.3, 666.0], [88.4, 666.0], [88.5, 670.0], [88.6, 675.0], [88.7, 675.0], [88.8, 676.0], [88.9, 677.0], [89.0, 677.0], [89.1, 677.0], [89.2, 682.0], [89.3, 684.0], [89.4, 686.0], [89.5, 686.0], [89.6, 687.0], [89.7, 687.0], [89.8, 691.0], [89.9, 691.0], [90.0, 694.0], [90.1, 695.0], [90.2, 695.0], [90.3, 698.0], [90.4, 700.0], [90.5, 704.0], [90.6, 704.0], [90.7, 707.0], [90.8, 708.0], [90.9, 708.0], [91.0, 708.0], [91.1, 710.0], [91.2, 710.0], [91.3, 711.0], [91.4, 711.0], [91.5, 711.0], [91.6, 711.0], [91.7, 711.0], [91.8, 713.0], [91.9, 717.0], [92.0, 717.0], [92.1, 717.0], [92.2, 718.0], [92.3, 718.0], [92.4, 722.0], [92.5, 722.0], [92.6, 723.0], [92.7, 724.0], [92.8, 725.0], [92.9, 725.0], [93.0, 729.0], [93.1, 731.0], [93.2, 732.0], [93.3, 732.0], [93.4, 738.0], [93.5, 747.0], [93.6, 747.0], [93.7, 749.0], [93.8, 758.0], [93.9, 761.0], [94.0, 761.0], [94.1, 780.0], [94.2, 781.0], [94.3, 782.0], [94.4, 782.0], [94.5, 800.0], [94.6, 811.0], [94.7, 813.0], [94.8, 813.0], [94.9, 816.0], [95.0, 827.0], [95.1, 827.0], [95.2, 829.0], [95.3, 837.0], [95.4, 852.0], [95.5, 852.0], [95.6, 856.0], [95.7, 870.0], [95.8, 900.0], [95.9, 900.0], [96.0, 910.0], [96.1, 912.0], [96.2, 919.0], [96.3, 919.0], [96.4, 922.0], [96.5, 924.0], [96.6, 926.0], [96.7, 926.0], [96.8, 946.0], [96.9, 953.0], [97.0, 953.0], [97.1, 970.0], [97.2, 974.0], [97.3, 1005.0], [97.4, 1005.0], [97.5, 1011.0], [97.6, 1046.0], [97.7, 1057.0], [97.8, 1057.0], [97.9, 1076.0], [98.0, 1107.0], [98.1, 1108.0], [98.2, 1108.0], [98.3, 1122.0], [98.4, 1168.0], [98.5, 1168.0], [98.6, 1214.0], [98.7, 1221.0], [98.8, 1263.0], [98.9, 1263.0], [99.0, 1265.0], [99.1, 1278.0], [99.2, 1595.0], [99.3, 1595.0], [99.4, 1621.0], [99.5, 1676.0], [99.6, 2389.0], [99.7, 2389.0], [99.8, 2758.0], [99.9, 2869.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 177.0, "series": [{"data": [[2300.0, 1.0], [600.0, 68.0], [2700.0, 1.0], [700.0, 30.0], [2800.0, 1.0], [200.0, 177.0], [800.0, 10.0], [900.0, 11.0], [1000.0, 5.0], [1100.0, 4.0], [1200.0, 5.0], [300.0, 167.0], [1500.0, 1.0], [400.0, 116.0], [100.0, 13.0], [1600.0, 2.0], [500.0, 123.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 475.0, "series": [{"data": [[0.0, 475.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 254.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60280718E12, "maxY": 1.0, "series": [{"data": [[1.6028073E12, 1.0], [1.60280718E12, 1.0], [1.60280748E12, 1.0], [1.60280754E12, 1.0], [1.60280736E12, 1.0], [1.60280742E12, 1.0], [1.60280724E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280754E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 463.2435374149659, "minX": 1.0, "maxY": 463.2435374149659, "series": [{"data": [[1.0, 463.2435374149659]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 463.2435374149659]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 261.76666666666665, "minX": 1.60280718E12, "maxY": 373261.7, "series": [{"data": [[1.6028073E12, 260099.53333333333], [1.60280718E12, 195207.56666666668], [1.60280748E12, 281595.68333333335], [1.60280754E12, 87687.36666666667], [1.60280736E12, 373261.7], [1.60280742E12, 285343.0], [1.60280724E12, 352586.68333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028073E12, 1025.9333333333334], [1.60280718E12, 451.48333333333335], [1.60280748E12, 1038.15], [1.60280754E12, 261.76666666666665], [1.60280736E12, 1009.0333333333333], [1.60280742E12, 886.25], [1.60280724E12, 850.4166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280754E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 396.3611111111111, "minX": 1.60280718E12, "maxY": 533.8303571428575, "series": [{"data": [[1.6028073E12, 437.36764705882325], [1.60280718E12, 459.73333333333335], [1.60280748E12, 432.62318840579695], [1.60280754E12, 396.3611111111111], [1.60280736E12, 439.94852941176464], [1.60280742E12, 511.32478632478643], [1.60280724E12, 533.8303571428575]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280754E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 395.44444444444446, "minX": 1.60280718E12, "maxY": 532.4374999999999, "series": [{"data": [[1.6028073E12, 436.4485294117648], [1.60280718E12, 458.69999999999993], [1.60280748E12, 431.6159420289856], [1.60280754E12, 395.44444444444446], [1.60280736E12, 438.75735294117635], [1.60280742E12, 510.23076923076917], [1.60280724E12, 532.4374999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280754E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014492753623188411, "minX": 1.60280718E12, "maxY": 0.7499999999999999, "series": [{"data": [[1.6028073E12, 0.022058823529411773], [1.60280718E12, 0.7499999999999999], [1.60280748E12, 0.014492753623188411], [1.60280754E12, 0.05555555555555558], [1.60280736E12, 0.01470588235294118], [1.60280742E12, 0.017094017094017096], [1.60280724E12, 0.017857142857142863]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280754E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 185.0, "minX": 1.60280718E12, "maxY": 2869.0, "series": [{"data": [[1.6028073E12, 1595.0], [1.60280718E12, 2758.0], [1.60280748E12, 1676.0], [1.60280754E12, 1263.0], [1.60280736E12, 2869.0], [1.60280742E12, 953.0], [1.60280724E12, 1265.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028073E12, 201.69899990200997], [1.60280718E12, 189.0], [1.60280748E12, 201.75299990057945], [1.60280754E12, 243.0], [1.60280736E12, 186.63099977135658], [1.60280742E12, 273.7439996623993], [1.60280724E12, 260.5949990570545]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028073E12, 202.06890003919602], [1.60280718E12, 189.0], [1.60280748E12, 202.12830003976822], [1.60280754E12, 243.0], [1.60280736E12, 187.49410009145737], [1.60280742E12, 275.0184001350403], [1.60280724E12, 264.1545003771782]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028073E12, 201.904499951005], [1.60280718E12, 189.0], [1.60280748E12, 201.96149995028972], [1.60280754E12, 243.0], [1.60280736E12, 187.11049988567828], [1.60280742E12, 274.45199983119966], [1.60280724E12, 262.57249952852726]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028073E12, 201.0], [1.60280718E12, 189.0], [1.60280748E12, 201.0], [1.60280754E12, 243.0], [1.60280736E12, 185.0], [1.60280742E12, 273.0], [1.60280724E12, 260.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028073E12, 400.5], [1.60280718E12, 349.0], [1.60280748E12, 386.5], [1.60280754E12, 273.0], [1.60280736E12, 361.0], [1.60280742E12, 487.0], [1.60280724E12, 463.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280754E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 209.0, "minX": 1.0, "maxY": 709.5, "series": [{"data": [[1.0, 709.5], [2.0, 489.5], [4.0, 266.5], [5.0, 209.0], [3.0, 375.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 209.0, "minX": 1.0, "maxY": 707.0, "series": [{"data": [[1.0, 707.0], [2.0, 489.5], [4.0, 266.5], [5.0, 209.0], [3.0, 374.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60280718E12, "maxY": 2.3, "series": [{"data": [[1.6028073E12, 2.2666666666666666], [1.60280718E12, 1.0166666666666666], [1.60280748E12, 2.3], [1.60280754E12, 0.5833333333333334], [1.60280736E12, 2.2666666666666666], [1.60280742E12, 1.95], [1.60280724E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280754E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60280718E12, "maxY": 2.3, "series": [{"data": [[1.6028073E12, 2.2666666666666666], [1.60280718E12, 1.0], [1.60280748E12, 2.3], [1.60280754E12, 0.6], [1.60280736E12, 2.2666666666666666], [1.60280742E12, 1.95], [1.60280724E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280754E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60280718E12, "maxY": 2.3, "series": [{"data": [[1.6028073E12, 2.2666666666666666], [1.60280718E12, 1.0], [1.60280748E12, 2.3], [1.60280754E12, 0.6], [1.60280736E12, 2.2666666666666666], [1.60280742E12, 1.95], [1.60280724E12, 1.8666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280754E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60280718E12, "maxY": 2.3, "series": [{"data": [[1.6028073E12, 2.2666666666666666], [1.60280718E12, 1.0], [1.60280748E12, 2.3], [1.60280754E12, 0.6], [1.60280736E12, 2.2666666666666666], [1.60280742E12, 1.95], [1.60280724E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280754E12, "title": "Total Transactions Per Second"}},
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

