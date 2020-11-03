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
        data: {"result": {"minY": 197.0, "minX": 0.0, "maxY": 5796.0, "series": [{"data": [[0.0, 197.0], [0.1, 200.0], [0.2, 202.0], [0.3, 204.0], [0.4, 206.0], [0.5, 207.0], [0.6, 207.0], [0.7, 208.0], [0.8, 208.0], [0.9, 209.0], [1.0, 209.0], [1.1, 210.0], [1.2, 210.0], [1.3, 210.0], [1.4, 211.0], [1.5, 211.0], [1.6, 211.0], [1.7, 211.0], [1.8, 212.0], [1.9, 212.0], [2.0, 212.0], [2.1, 212.0], [2.2, 213.0], [2.3, 213.0], [2.4, 213.0], [2.5, 214.0], [2.6, 214.0], [2.7, 214.0], [2.8, 214.0], [2.9, 215.0], [3.0, 215.0], [3.1, 215.0], [3.2, 216.0], [3.3, 216.0], [3.4, 216.0], [3.5, 216.0], [3.6, 217.0], [3.7, 217.0], [3.8, 217.0], [3.9, 217.0], [4.0, 218.0], [4.1, 218.0], [4.2, 218.0], [4.3, 218.0], [4.4, 218.0], [4.5, 219.0], [4.6, 219.0], [4.7, 219.0], [4.8, 219.0], [4.9, 219.0], [5.0, 220.0], [5.1, 220.0], [5.2, 220.0], [5.3, 220.0], [5.4, 220.0], [5.5, 220.0], [5.6, 221.0], [5.7, 221.0], [5.8, 221.0], [5.9, 221.0], [6.0, 221.0], [6.1, 222.0], [6.2, 222.0], [6.3, 222.0], [6.4, 222.0], [6.5, 222.0], [6.6, 223.0], [6.7, 223.0], [6.8, 223.0], [6.9, 223.0], [7.0, 223.0], [7.1, 223.0], [7.2, 224.0], [7.3, 224.0], [7.4, 224.0], [7.5, 225.0], [7.6, 225.0], [7.7, 225.0], [7.8, 225.0], [7.9, 226.0], [8.0, 226.0], [8.1, 226.0], [8.2, 226.0], [8.3, 226.0], [8.4, 227.0], [8.5, 227.0], [8.6, 227.0], [8.7, 227.0], [8.8, 228.0], [8.9, 228.0], [9.0, 229.0], [9.1, 229.0], [9.2, 229.0], [9.3, 229.0], [9.4, 230.0], [9.5, 230.0], [9.6, 230.0], [9.7, 230.0], [9.8, 230.0], [9.9, 231.0], [10.0, 231.0], [10.1, 231.0], [10.2, 231.0], [10.3, 232.0], [10.4, 232.0], [10.5, 232.0], [10.6, 232.0], [10.7, 233.0], [10.8, 233.0], [10.9, 233.0], [11.0, 234.0], [11.1, 234.0], [11.2, 234.0], [11.3, 234.0], [11.4, 234.0], [11.5, 235.0], [11.6, 235.0], [11.7, 235.0], [11.8, 236.0], [11.9, 236.0], [12.0, 236.0], [12.1, 236.0], [12.2, 237.0], [12.3, 237.0], [12.4, 237.0], [12.5, 238.0], [12.6, 238.0], [12.7, 238.0], [12.8, 239.0], [12.9, 239.0], [13.0, 239.0], [13.1, 239.0], [13.2, 240.0], [13.3, 240.0], [13.4, 240.0], [13.5, 241.0], [13.6, 241.0], [13.7, 242.0], [13.8, 242.0], [13.9, 242.0], [14.0, 243.0], [14.1, 243.0], [14.2, 243.0], [14.3, 244.0], [14.4, 244.0], [14.5, 244.0], [14.6, 244.0], [14.7, 245.0], [14.8, 245.0], [14.9, 245.0], [15.0, 246.0], [15.1, 246.0], [15.2, 246.0], [15.3, 246.0], [15.4, 247.0], [15.5, 247.0], [15.6, 247.0], [15.7, 248.0], [15.8, 248.0], [15.9, 249.0], [16.0, 249.0], [16.1, 250.0], [16.2, 250.0], [16.3, 250.0], [16.4, 251.0], [16.5, 252.0], [16.6, 252.0], [16.7, 253.0], [16.8, 253.0], [16.9, 253.0], [17.0, 254.0], [17.1, 254.0], [17.2, 254.0], [17.3, 254.0], [17.4, 255.0], [17.5, 255.0], [17.6, 256.0], [17.7, 256.0], [17.8, 256.0], [17.9, 258.0], [18.0, 258.0], [18.1, 258.0], [18.2, 259.0], [18.3, 260.0], [18.4, 260.0], [18.5, 260.0], [18.6, 261.0], [18.7, 262.0], [18.8, 262.0], [18.9, 263.0], [19.0, 264.0], [19.1, 264.0], [19.2, 264.0], [19.3, 265.0], [19.4, 265.0], [19.5, 266.0], [19.6, 266.0], [19.7, 267.0], [19.8, 267.0], [19.9, 268.0], [20.0, 268.0], [20.1, 268.0], [20.2, 269.0], [20.3, 269.0], [20.4, 270.0], [20.5, 270.0], [20.6, 271.0], [20.7, 271.0], [20.8, 272.0], [20.9, 272.0], [21.0, 273.0], [21.1, 273.0], [21.2, 274.0], [21.3, 274.0], [21.4, 274.0], [21.5, 274.0], [21.6, 275.0], [21.7, 275.0], [21.8, 276.0], [21.9, 276.0], [22.0, 277.0], [22.1, 277.0], [22.2, 278.0], [22.3, 278.0], [22.4, 279.0], [22.5, 279.0], [22.6, 279.0], [22.7, 280.0], [22.8, 280.0], [22.9, 280.0], [23.0, 280.0], [23.1, 280.0], [23.2, 281.0], [23.3, 281.0], [23.4, 281.0], [23.5, 282.0], [23.6, 282.0], [23.7, 282.0], [23.8, 282.0], [23.9, 283.0], [24.0, 283.0], [24.1, 283.0], [24.2, 283.0], [24.3, 284.0], [24.4, 284.0], [24.5, 284.0], [24.6, 285.0], [24.7, 285.0], [24.8, 285.0], [24.9, 286.0], [25.0, 286.0], [25.1, 286.0], [25.2, 286.0], [25.3, 287.0], [25.4, 287.0], [25.5, 287.0], [25.6, 288.0], [25.7, 288.0], [25.8, 288.0], [25.9, 289.0], [26.0, 289.0], [26.1, 289.0], [26.2, 290.0], [26.3, 291.0], [26.4, 291.0], [26.5, 291.0], [26.6, 292.0], [26.7, 292.0], [26.8, 292.0], [26.9, 292.0], [27.0, 293.0], [27.1, 293.0], [27.2, 293.0], [27.3, 294.0], [27.4, 294.0], [27.5, 294.0], [27.6, 294.0], [27.7, 295.0], [27.8, 295.0], [27.9, 295.0], [28.0, 295.0], [28.1, 296.0], [28.2, 296.0], [28.3, 296.0], [28.4, 297.0], [28.5, 297.0], [28.6, 298.0], [28.7, 298.0], [28.8, 298.0], [28.9, 298.0], [29.0, 299.0], [29.1, 299.0], [29.2, 299.0], [29.3, 299.0], [29.4, 300.0], [29.5, 300.0], [29.6, 300.0], [29.7, 300.0], [29.8, 301.0], [29.9, 301.0], [30.0, 301.0], [30.1, 302.0], [30.2, 302.0], [30.3, 302.0], [30.4, 303.0], [30.5, 303.0], [30.6, 303.0], [30.7, 304.0], [30.8, 304.0], [30.9, 305.0], [31.0, 305.0], [31.1, 305.0], [31.2, 306.0], [31.3, 306.0], [31.4, 307.0], [31.5, 307.0], [31.6, 308.0], [31.7, 308.0], [31.8, 308.0], [31.9, 309.0], [32.0, 309.0], [32.1, 309.0], [32.2, 310.0], [32.3, 310.0], [32.4, 310.0], [32.5, 311.0], [32.6, 311.0], [32.7, 312.0], [32.8, 312.0], [32.9, 313.0], [33.0, 313.0], [33.1, 313.0], [33.2, 314.0], [33.3, 314.0], [33.4, 314.0], [33.5, 315.0], [33.6, 315.0], [33.7, 316.0], [33.8, 316.0], [33.9, 316.0], [34.0, 317.0], [34.1, 317.0], [34.2, 318.0], [34.3, 318.0], [34.4, 318.0], [34.5, 319.0], [34.6, 320.0], [34.7, 320.0], [34.8, 321.0], [34.9, 321.0], [35.0, 321.0], [35.1, 322.0], [35.2, 322.0], [35.3, 322.0], [35.4, 323.0], [35.5, 323.0], [35.6, 323.0], [35.7, 324.0], [35.8, 324.0], [35.9, 324.0], [36.0, 325.0], [36.1, 325.0], [36.2, 325.0], [36.3, 325.0], [36.4, 326.0], [36.5, 326.0], [36.6, 326.0], [36.7, 327.0], [36.8, 327.0], [36.9, 327.0], [37.0, 328.0], [37.1, 328.0], [37.2, 328.0], [37.3, 328.0], [37.4, 329.0], [37.5, 329.0], [37.6, 329.0], [37.7, 330.0], [37.8, 330.0], [37.9, 331.0], [38.0, 331.0], [38.1, 331.0], [38.2, 332.0], [38.3, 332.0], [38.4, 332.0], [38.5, 333.0], [38.6, 333.0], [38.7, 334.0], [38.8, 334.0], [38.9, 334.0], [39.0, 335.0], [39.1, 335.0], [39.2, 335.0], [39.3, 335.0], [39.4, 336.0], [39.5, 336.0], [39.6, 337.0], [39.7, 337.0], [39.8, 337.0], [39.9, 338.0], [40.0, 338.0], [40.1, 339.0], [40.2, 339.0], [40.3, 340.0], [40.4, 340.0], [40.5, 341.0], [40.6, 341.0], [40.7, 341.0], [40.8, 342.0], [40.9, 342.0], [41.0, 342.0], [41.1, 343.0], [41.2, 344.0], [41.3, 344.0], [41.4, 344.0], [41.5, 344.0], [41.6, 345.0], [41.7, 345.0], [41.8, 346.0], [41.9, 346.0], [42.0, 346.0], [42.1, 347.0], [42.2, 348.0], [42.3, 348.0], [42.4, 349.0], [42.5, 349.0], [42.6, 349.0], [42.7, 350.0], [42.8, 350.0], [42.9, 351.0], [43.0, 351.0], [43.1, 351.0], [43.2, 352.0], [43.3, 352.0], [43.4, 352.0], [43.5, 353.0], [43.6, 353.0], [43.7, 354.0], [43.8, 354.0], [43.9, 355.0], [44.0, 356.0], [44.1, 356.0], [44.2, 356.0], [44.3, 357.0], [44.4, 357.0], [44.5, 357.0], [44.6, 358.0], [44.7, 358.0], [44.8, 359.0], [44.9, 359.0], [45.0, 359.0], [45.1, 359.0], [45.2, 360.0], [45.3, 360.0], [45.4, 361.0], [45.5, 361.0], [45.6, 362.0], [45.7, 362.0], [45.8, 363.0], [45.9, 363.0], [46.0, 364.0], [46.1, 364.0], [46.2, 364.0], [46.3, 365.0], [46.4, 365.0], [46.5, 366.0], [46.6, 366.0], [46.7, 367.0], [46.8, 367.0], [46.9, 367.0], [47.0, 368.0], [47.1, 369.0], [47.2, 369.0], [47.3, 370.0], [47.4, 370.0], [47.5, 370.0], [47.6, 371.0], [47.7, 371.0], [47.8, 372.0], [47.9, 373.0], [48.0, 373.0], [48.1, 373.0], [48.2, 374.0], [48.3, 374.0], [48.4, 375.0], [48.5, 375.0], [48.6, 375.0], [48.7, 376.0], [48.8, 376.0], [48.9, 377.0], [49.0, 377.0], [49.1, 378.0], [49.2, 379.0], [49.3, 379.0], [49.4, 380.0], [49.5, 381.0], [49.6, 382.0], [49.7, 383.0], [49.8, 383.0], [49.9, 384.0], [50.0, 384.0], [50.1, 385.0], [50.2, 385.0], [50.3, 386.0], [50.4, 386.0], [50.5, 387.0], [50.6, 388.0], [50.7, 388.0], [50.8, 389.0], [50.9, 390.0], [51.0, 390.0], [51.1, 391.0], [51.2, 391.0], [51.3, 392.0], [51.4, 392.0], [51.5, 392.0], [51.6, 393.0], [51.7, 393.0], [51.8, 394.0], [51.9, 395.0], [52.0, 395.0], [52.1, 396.0], [52.2, 397.0], [52.3, 397.0], [52.4, 397.0], [52.5, 398.0], [52.6, 398.0], [52.7, 399.0], [52.8, 399.0], [52.9, 400.0], [53.0, 400.0], [53.1, 401.0], [53.2, 402.0], [53.3, 402.0], [53.4, 403.0], [53.5, 403.0], [53.6, 404.0], [53.7, 404.0], [53.8, 405.0], [53.9, 405.0], [54.0, 406.0], [54.1, 406.0], [54.2, 407.0], [54.3, 407.0], [54.4, 408.0], [54.5, 408.0], [54.6, 409.0], [54.7, 409.0], [54.8, 410.0], [54.9, 411.0], [55.0, 411.0], [55.1, 412.0], [55.2, 412.0], [55.3, 413.0], [55.4, 413.0], [55.5, 414.0], [55.6, 414.0], [55.7, 415.0], [55.8, 415.0], [55.9, 415.0], [56.0, 416.0], [56.1, 416.0], [56.2, 416.0], [56.3, 417.0], [56.4, 417.0], [56.5, 418.0], [56.6, 418.0], [56.7, 418.0], [56.8, 419.0], [56.9, 419.0], [57.0, 419.0], [57.1, 420.0], [57.2, 421.0], [57.3, 421.0], [57.4, 421.0], [57.5, 422.0], [57.6, 422.0], [57.7, 423.0], [57.8, 423.0], [57.9, 424.0], [58.0, 424.0], [58.1, 425.0], [58.2, 426.0], [58.3, 426.0], [58.4, 426.0], [58.5, 427.0], [58.6, 427.0], [58.7, 428.0], [58.8, 428.0], [58.9, 429.0], [59.0, 430.0], [59.1, 431.0], [59.2, 431.0], [59.3, 432.0], [59.4, 433.0], [59.5, 433.0], [59.6, 434.0], [59.7, 434.0], [59.8, 435.0], [59.9, 435.0], [60.0, 436.0], [60.1, 436.0], [60.2, 436.0], [60.3, 437.0], [60.4, 437.0], [60.5, 438.0], [60.6, 438.0], [60.7, 439.0], [60.8, 439.0], [60.9, 440.0], [61.0, 440.0], [61.1, 440.0], [61.2, 441.0], [61.3, 441.0], [61.4, 442.0], [61.5, 442.0], [61.6, 443.0], [61.7, 443.0], [61.8, 444.0], [61.9, 445.0], [62.0, 446.0], [62.1, 446.0], [62.2, 447.0], [62.3, 448.0], [62.4, 448.0], [62.5, 449.0], [62.6, 449.0], [62.7, 450.0], [62.8, 450.0], [62.9, 451.0], [63.0, 452.0], [63.1, 452.0], [63.2, 453.0], [63.3, 453.0], [63.4, 454.0], [63.5, 455.0], [63.6, 456.0], [63.7, 457.0], [63.8, 457.0], [63.9, 458.0], [64.0, 458.0], [64.1, 459.0], [64.2, 459.0], [64.3, 460.0], [64.4, 461.0], [64.5, 461.0], [64.6, 462.0], [64.7, 462.0], [64.8, 464.0], [64.9, 464.0], [65.0, 465.0], [65.1, 465.0], [65.2, 466.0], [65.3, 466.0], [65.4, 467.0], [65.5, 467.0], [65.6, 467.0], [65.7, 468.0], [65.8, 469.0], [65.9, 469.0], [66.0, 470.0], [66.1, 471.0], [66.2, 471.0], [66.3, 472.0], [66.4, 472.0], [66.5, 473.0], [66.6, 474.0], [66.7, 475.0], [66.8, 476.0], [66.9, 476.0], [67.0, 476.0], [67.1, 477.0], [67.2, 478.0], [67.3, 479.0], [67.4, 480.0], [67.5, 481.0], [67.6, 481.0], [67.7, 483.0], [67.8, 484.0], [67.9, 485.0], [68.0, 486.0], [68.1, 487.0], [68.2, 488.0], [68.3, 489.0], [68.4, 490.0], [68.5, 491.0], [68.6, 492.0], [68.7, 492.0], [68.8, 493.0], [68.9, 494.0], [69.0, 495.0], [69.1, 496.0], [69.2, 496.0], [69.3, 498.0], [69.4, 499.0], [69.5, 500.0], [69.6, 500.0], [69.7, 501.0], [69.8, 502.0], [69.9, 503.0], [70.0, 504.0], [70.1, 505.0], [70.2, 506.0], [70.3, 507.0], [70.4, 508.0], [70.5, 508.0], [70.6, 510.0], [70.7, 511.0], [70.8, 512.0], [70.9, 514.0], [71.0, 515.0], [71.1, 516.0], [71.2, 517.0], [71.3, 518.0], [71.4, 518.0], [71.5, 520.0], [71.6, 520.0], [71.7, 521.0], [71.8, 522.0], [71.9, 523.0], [72.0, 525.0], [72.1, 527.0], [72.2, 528.0], [72.3, 529.0], [72.4, 530.0], [72.5, 531.0], [72.6, 533.0], [72.7, 533.0], [72.8, 534.0], [72.9, 535.0], [73.0, 536.0], [73.1, 537.0], [73.2, 538.0], [73.3, 539.0], [73.4, 540.0], [73.5, 541.0], [73.6, 542.0], [73.7, 544.0], [73.8, 546.0], [73.9, 547.0], [74.0, 548.0], [74.1, 549.0], [74.2, 550.0], [74.3, 551.0], [74.4, 553.0], [74.5, 554.0], [74.6, 555.0], [74.7, 556.0], [74.8, 558.0], [74.9, 560.0], [75.0, 561.0], [75.1, 562.0], [75.2, 563.0], [75.3, 564.0], [75.4, 565.0], [75.5, 567.0], [75.6, 568.0], [75.7, 570.0], [75.8, 572.0], [75.9, 573.0], [76.0, 574.0], [76.1, 576.0], [76.2, 576.0], [76.3, 578.0], [76.4, 580.0], [76.5, 581.0], [76.6, 584.0], [76.7, 584.0], [76.8, 586.0], [76.9, 587.0], [77.0, 588.0], [77.1, 589.0], [77.2, 590.0], [77.3, 590.0], [77.4, 592.0], [77.5, 594.0], [77.6, 595.0], [77.7, 597.0], [77.8, 598.0], [77.9, 600.0], [78.0, 602.0], [78.1, 603.0], [78.2, 605.0], [78.3, 606.0], [78.4, 607.0], [78.5, 608.0], [78.6, 611.0], [78.7, 612.0], [78.8, 613.0], [78.9, 614.0], [79.0, 615.0], [79.1, 617.0], [79.2, 618.0], [79.3, 620.0], [79.4, 621.0], [79.5, 621.0], [79.6, 623.0], [79.7, 624.0], [79.8, 625.0], [79.9, 626.0], [80.0, 627.0], [80.1, 629.0], [80.2, 631.0], [80.3, 632.0], [80.4, 633.0], [80.5, 634.0], [80.6, 636.0], [80.7, 637.0], [80.8, 638.0], [80.9, 639.0], [81.0, 642.0], [81.1, 643.0], [81.2, 647.0], [81.3, 648.0], [81.4, 649.0], [81.5, 651.0], [81.6, 654.0], [81.7, 656.0], [81.8, 657.0], [81.9, 659.0], [82.0, 661.0], [82.1, 662.0], [82.2, 664.0], [82.3, 666.0], [82.4, 668.0], [82.5, 669.0], [82.6, 672.0], [82.7, 674.0], [82.8, 676.0], [82.9, 677.0], [83.0, 682.0], [83.1, 683.0], [83.2, 685.0], [83.3, 686.0], [83.4, 688.0], [83.5, 689.0], [83.6, 693.0], [83.7, 695.0], [83.8, 699.0], [83.9, 700.0], [84.0, 702.0], [84.1, 704.0], [84.2, 704.0], [84.3, 705.0], [84.4, 706.0], [84.5, 707.0], [84.6, 710.0], [84.7, 711.0], [84.8, 713.0], [84.9, 714.0], [85.0, 716.0], [85.1, 718.0], [85.2, 720.0], [85.3, 722.0], [85.4, 724.0], [85.5, 725.0], [85.6, 726.0], [85.7, 728.0], [85.8, 731.0], [85.9, 732.0], [86.0, 733.0], [86.1, 736.0], [86.2, 737.0], [86.3, 739.0], [86.4, 744.0], [86.5, 746.0], [86.6, 748.0], [86.7, 752.0], [86.8, 753.0], [86.9, 755.0], [87.0, 756.0], [87.1, 757.0], [87.2, 760.0], [87.3, 762.0], [87.4, 763.0], [87.5, 768.0], [87.6, 769.0], [87.7, 772.0], [87.8, 774.0], [87.9, 775.0], [88.0, 778.0], [88.1, 780.0], [88.2, 784.0], [88.3, 785.0], [88.4, 789.0], [88.5, 792.0], [88.6, 794.0], [88.7, 797.0], [88.8, 802.0], [88.9, 804.0], [89.0, 804.0], [89.1, 805.0], [89.2, 809.0], [89.3, 810.0], [89.4, 813.0], [89.5, 815.0], [89.6, 817.0], [89.7, 819.0], [89.8, 820.0], [89.9, 822.0], [90.0, 825.0], [90.1, 827.0], [90.2, 828.0], [90.3, 832.0], [90.4, 835.0], [90.5, 836.0], [90.6, 840.0], [90.7, 843.0], [90.8, 845.0], [90.9, 846.0], [91.0, 849.0], [91.1, 852.0], [91.2, 855.0], [91.3, 856.0], [91.4, 858.0], [91.5, 861.0], [91.6, 864.0], [91.7, 866.0], [91.8, 869.0], [91.9, 871.0], [92.0, 873.0], [92.1, 876.0], [92.2, 881.0], [92.3, 883.0], [92.4, 885.0], [92.5, 887.0], [92.6, 889.0], [92.7, 893.0], [92.8, 896.0], [92.9, 901.0], [93.0, 902.0], [93.1, 906.0], [93.2, 910.0], [93.3, 914.0], [93.4, 916.0], [93.5, 920.0], [93.6, 925.0], [93.7, 928.0], [93.8, 933.0], [93.9, 936.0], [94.0, 939.0], [94.1, 942.0], [94.2, 946.0], [94.3, 950.0], [94.4, 953.0], [94.5, 959.0], [94.6, 966.0], [94.7, 969.0], [94.8, 974.0], [94.9, 979.0], [95.0, 983.0], [95.1, 987.0], [95.2, 990.0], [95.3, 998.0], [95.4, 1004.0], [95.5, 1010.0], [95.6, 1013.0], [95.7, 1016.0], [95.8, 1018.0], [95.9, 1021.0], [96.0, 1022.0], [96.1, 1026.0], [96.2, 1030.0], [96.3, 1033.0], [96.4, 1041.0], [96.5, 1044.0], [96.6, 1050.0], [96.7, 1059.0], [96.8, 1064.0], [96.9, 1067.0], [97.0, 1072.0], [97.1, 1077.0], [97.2, 1083.0], [97.3, 1091.0], [97.4, 1097.0], [97.5, 1104.0], [97.6, 1106.0], [97.7, 1113.0], [97.8, 1117.0], [97.9, 1122.0], [98.0, 1124.0], [98.1, 1129.0], [98.2, 1135.0], [98.3, 1147.0], [98.4, 1149.0], [98.5, 1158.0], [98.6, 1172.0], [98.7, 1179.0], [98.8, 1192.0], [98.9, 1201.0], [99.0, 1219.0], [99.1, 1235.0], [99.2, 1245.0], [99.3, 1274.0], [99.4, 1317.0], [99.5, 1356.0], [99.6, 1422.0], [99.7, 1449.0], [99.8, 1566.0], [99.9, 1714.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1516.0, "series": [{"data": [[600.0, 309.0], [700.0, 255.0], [200.0, 1516.0], [800.0, 213.0], [900.0, 127.0], [1000.0, 111.0], [1100.0, 73.0], [1200.0, 25.0], [300.0, 1221.0], [1300.0, 13.0], [1400.0, 8.0], [5400.0, 1.0], [5700.0, 1.0], [1500.0, 5.0], [400.0, 863.0], [100.0, 5.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [500.0, 438.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3613.0, "series": [{"data": [[0.0, 3613.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1564.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.966088922381312, "minX": 1.60437792E12, "maxY": 10.0, "series": [{"data": [[1.60437792E12, 10.0], [1.6043781E12, 10.0], [1.60437798E12, 10.0], [1.60437816E12, 9.966088922381312], [1.60437804E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 1312.0, "series": [{"data": [[8.0, 440.0], [4.0, 1172.0], [2.0, 683.0], [1.0, 288.0], [9.0, 1312.0], [10.0, 462.2767805442963], [5.0, 362.0], [6.0, 570.0], [3.0, 352.0], [7.0, 377.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 462.54566473988416]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 66.85, "minX": 1.60437792E12, "maxY": 255323.15, "series": [{"data": [[1.60437792E12, 930.4833333333333], [1.6043781E12, 245405.96666666667], [1.60437798E12, 250037.91666666666], [1.60437816E12, 255323.15], [1.60437804E12, 250535.96666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60437792E12, 66.85], [1.6043781E12, 8942.3], [1.60437798E12, 9059.683333333332], [1.60437816E12, 9805.933333333332], [1.60437804E12, 9751.066666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 447.03993971363974, "minX": 1.60437792E12, "maxY": 780.1111111111111, "series": [{"data": [[1.60437792E12, 780.1111111111111], [1.6043781E12, 475.09033280507197], [1.60437798E12, 472.4748427672954], [1.60437816E12, 447.03993971363974], [1.60437804E12, 454.40681818181815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 446.97437829691034, "minX": 1.60437792E12, "maxY": 779.7777777777778, "series": [{"data": [[1.60437792E12, 779.7777777777778], [1.6043781E12, 475.0285261489701], [1.60437798E12, 472.4190251572327], [1.60437816E12, 446.97437829691034], [1.60437804E12, 454.3310606060604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0071315372424722665, "minX": 1.60437792E12, "maxY": 4.888888888888889, "series": [{"data": [[1.60437792E12, 4.888888888888889], [1.6043781E12, 0.0071315372424722665], [1.60437798E12, 0.03616352201257858], [1.60437816E12, 0.010550113036925395], [1.60437804E12, 0.008333333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 197.0, "minX": 1.60437792E12, "maxY": 5796.0, "series": [{"data": [[1.60437792E12, 1245.0], [1.6043781E12, 5433.0], [1.60437798E12, 5796.0], [1.60437816E12, 2031.0], [1.60437804E12, 2005.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60437792E12, 236.0], [1.6043781E12, 207.36699969887732], [1.60437798E12, 209.45699969649314], [1.60437816E12, 211.95199968338014], [1.60437804E12, 207.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60437792E12, 236.0], [1.6043781E12, 208.0], [1.60437798E12, 210.0], [1.60437816E12, 212.0], [1.60437804E12, 207.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60437792E12, 236.0], [1.6043781E12, 207.99849984943867], [1.60437798E12, 210.0], [1.60437816E12, 212.0], [1.60437804E12, 207.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60437792E12, 236.0], [1.6043781E12, 199.0], [1.60437798E12, 197.0], [1.60437816E12, 205.0], [1.60437804E12, 199.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60437792E12, 919.0], [1.6043781E12, 385.0], [1.60437798E12, 405.0], [1.60437816E12, 364.0], [1.60437804E12, 373.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 279.0, "minX": 6.0, "maxY": 919.0, "series": [{"data": [[9.0, 919.0], [15.0, 555.0], [16.0, 528.5], [17.0, 480.0], [18.0, 451.5], [19.0, 447.0], [20.0, 432.5], [21.0, 400.5], [22.0, 367.0], [23.0, 341.0], [24.0, 336.5], [6.0, 466.0], [25.0, 337.5], [26.0, 303.0], [27.0, 307.0], [28.0, 284.5], [29.0, 279.0], [30.0, 293.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 279.0, "minX": 6.0, "maxY": 919.0, "series": [{"data": [[9.0, 919.0], [15.0, 555.0], [16.0, 528.5], [17.0, 480.0], [18.0, 451.5], [19.0, 447.0], [20.0, 432.5], [21.0, 400.5], [22.0, 367.0], [23.0, 341.0], [24.0, 336.5], [6.0, 466.0], [25.0, 337.5], [26.0, 303.0], [27.0, 307.0], [28.0, 284.5], [29.0, 279.0], [30.0, 293.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60437792E12, "maxY": 22.0, "series": [{"data": [[1.60437792E12, 0.31666666666666665], [1.6043781E12, 21.033333333333335], [1.60437798E12, 21.2], [1.60437816E12, 21.95], [1.60437804E12, 22.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.60437792E12, "maxY": 22.116666666666667, "series": [{"data": [[1.60437792E12, 0.15], [1.6043781E12, 21.033333333333335], [1.60437798E12, 21.2], [1.60437816E12, 22.116666666666667], [1.60437804E12, 22.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.60437792E12, "maxY": 22.116666666666667, "series": [{"data": [[1.60437792E12, 0.15], [1.6043781E12, 21.033333333333335], [1.60437798E12, 21.2], [1.60437816E12, 22.116666666666667], [1.60437804E12, 22.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.60437792E12, "maxY": 22.116666666666667, "series": [{"data": [[1.60437792E12, 0.15], [1.6043781E12, 21.033333333333335], [1.60437798E12, 21.2], [1.60437816E12, 22.116666666666667], [1.60437804E12, 22.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437816E12, "title": "Total Transactions Per Second"}},
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

