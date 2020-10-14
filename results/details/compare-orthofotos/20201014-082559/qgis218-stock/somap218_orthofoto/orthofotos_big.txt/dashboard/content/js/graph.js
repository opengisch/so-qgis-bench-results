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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 7663.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 10.0], [0.3, 12.0], [0.4, 13.0], [0.5, 13.0], [0.6, 14.0], [0.7, 14.0], [0.8, 15.0], [0.9, 19.0], [1.0, 22.0], [1.1, 23.0], [1.2, 25.0], [1.3, 26.0], [1.4, 27.0], [1.5, 28.0], [1.6, 31.0], [1.7, 32.0], [1.8, 33.0], [1.9, 34.0], [2.0, 35.0], [2.1, 40.0], [2.2, 43.0], [2.3, 45.0], [2.4, 47.0], [2.5, 49.0], [2.6, 53.0], [2.7, 56.0], [2.8, 59.0], [2.9, 62.0], [3.0, 66.0], [3.1, 70.0], [3.2, 76.0], [3.3, 79.0], [3.4, 81.0], [3.5, 87.0], [3.6, 92.0], [3.7, 101.0], [3.8, 105.0], [3.9, 109.0], [4.0, 111.0], [4.1, 114.0], [4.2, 117.0], [4.3, 120.0], [4.4, 121.0], [4.5, 122.0], [4.6, 124.0], [4.7, 125.0], [4.8, 127.0], [4.9, 128.0], [5.0, 130.0], [5.1, 130.0], [5.2, 131.0], [5.3, 133.0], [5.4, 133.0], [5.5, 134.0], [5.6, 135.0], [5.7, 136.0], [5.8, 136.0], [5.9, 137.0], [6.0, 138.0], [6.1, 138.0], [6.2, 139.0], [6.3, 139.0], [6.4, 140.0], [6.5, 140.0], [6.6, 141.0], [6.7, 142.0], [6.8, 143.0], [6.9, 143.0], [7.0, 143.0], [7.1, 144.0], [7.2, 144.0], [7.3, 145.0], [7.4, 145.0], [7.5, 146.0], [7.6, 147.0], [7.7, 148.0], [7.8, 148.0], [7.9, 149.0], [8.0, 149.0], [8.1, 149.0], [8.2, 150.0], [8.3, 151.0], [8.4, 151.0], [8.5, 152.0], [8.6, 152.0], [8.7, 153.0], [8.8, 153.0], [8.9, 154.0], [9.0, 154.0], [9.1, 154.0], [9.2, 156.0], [9.3, 157.0], [9.4, 157.0], [9.5, 158.0], [9.6, 158.0], [9.7, 159.0], [9.8, 159.0], [9.9, 160.0], [10.0, 160.0], [10.1, 161.0], [10.2, 162.0], [10.3, 162.0], [10.4, 162.0], [10.5, 163.0], [10.6, 163.0], [10.7, 164.0], [10.8, 165.0], [10.9, 166.0], [11.0, 166.0], [11.1, 167.0], [11.2, 168.0], [11.3, 169.0], [11.4, 169.0], [11.5, 170.0], [11.6, 171.0], [11.7, 171.0], [11.8, 172.0], [11.9, 172.0], [12.0, 173.0], [12.1, 173.0], [12.2, 174.0], [12.3, 175.0], [12.4, 175.0], [12.5, 176.0], [12.6, 176.0], [12.7, 177.0], [12.8, 177.0], [12.9, 178.0], [13.0, 178.0], [13.1, 178.0], [13.2, 179.0], [13.3, 179.0], [13.4, 180.0], [13.5, 180.0], [13.6, 181.0], [13.7, 181.0], [13.8, 182.0], [13.9, 182.0], [14.0, 182.0], [14.1, 182.0], [14.2, 183.0], [14.3, 184.0], [14.4, 185.0], [14.5, 185.0], [14.6, 186.0], [14.7, 186.0], [14.8, 188.0], [14.9, 188.0], [15.0, 189.0], [15.1, 189.0], [15.2, 190.0], [15.3, 191.0], [15.4, 191.0], [15.5, 192.0], [15.6, 192.0], [15.7, 192.0], [15.8, 193.0], [15.9, 193.0], [16.0, 194.0], [16.1, 194.0], [16.2, 194.0], [16.3, 195.0], [16.4, 195.0], [16.5, 196.0], [16.6, 197.0], [16.7, 198.0], [16.8, 198.0], [16.9, 198.0], [17.0, 199.0], [17.1, 200.0], [17.2, 200.0], [17.3, 201.0], [17.4, 201.0], [17.5, 201.0], [17.6, 202.0], [17.7, 203.0], [17.8, 203.0], [17.9, 204.0], [18.0, 204.0], [18.1, 205.0], [18.2, 205.0], [18.3, 205.0], [18.4, 206.0], [18.5, 206.0], [18.6, 207.0], [18.7, 207.0], [18.8, 207.0], [18.9, 208.0], [19.0, 209.0], [19.1, 209.0], [19.2, 210.0], [19.3, 210.0], [19.4, 210.0], [19.5, 211.0], [19.6, 211.0], [19.7, 212.0], [19.8, 212.0], [19.9, 212.0], [20.0, 213.0], [20.1, 213.0], [20.2, 214.0], [20.3, 214.0], [20.4, 215.0], [20.5, 215.0], [20.6, 216.0], [20.7, 216.0], [20.8, 216.0], [20.9, 216.0], [21.0, 216.0], [21.1, 217.0], [21.2, 218.0], [21.3, 218.0], [21.4, 218.0], [21.5, 219.0], [21.6, 219.0], [21.7, 220.0], [21.8, 220.0], [21.9, 220.0], [22.0, 221.0], [22.1, 221.0], [22.2, 223.0], [22.3, 223.0], [22.4, 223.0], [22.5, 224.0], [22.6, 224.0], [22.7, 225.0], [22.8, 225.0], [22.9, 226.0], [23.0, 226.0], [23.1, 226.0], [23.2, 227.0], [23.3, 227.0], [23.4, 228.0], [23.5, 228.0], [23.6, 228.0], [23.7, 229.0], [23.8, 229.0], [23.9, 229.0], [24.0, 230.0], [24.1, 231.0], [24.2, 231.0], [24.3, 232.0], [24.4, 232.0], [24.5, 232.0], [24.6, 232.0], [24.7, 233.0], [24.8, 233.0], [24.9, 234.0], [25.0, 234.0], [25.1, 235.0], [25.2, 235.0], [25.3, 236.0], [25.4, 237.0], [25.5, 237.0], [25.6, 237.0], [25.7, 237.0], [25.8, 238.0], [25.9, 238.0], [26.0, 239.0], [26.1, 239.0], [26.2, 240.0], [26.3, 240.0], [26.4, 241.0], [26.5, 241.0], [26.6, 241.0], [26.7, 242.0], [26.8, 242.0], [26.9, 242.0], [27.0, 243.0], [27.1, 243.0], [27.2, 243.0], [27.3, 244.0], [27.4, 244.0], [27.5, 244.0], [27.6, 245.0], [27.7, 245.0], [27.8, 246.0], [27.9, 246.0], [28.0, 246.0], [28.1, 247.0], [28.2, 247.0], [28.3, 248.0], [28.4, 248.0], [28.5, 249.0], [28.6, 249.0], [28.7, 249.0], [28.8, 250.0], [28.9, 250.0], [29.0, 250.0], [29.1, 251.0], [29.2, 251.0], [29.3, 252.0], [29.4, 252.0], [29.5, 253.0], [29.6, 253.0], [29.7, 253.0], [29.8, 254.0], [29.9, 254.0], [30.0, 255.0], [30.1, 255.0], [30.2, 255.0], [30.3, 256.0], [30.4, 256.0], [30.5, 256.0], [30.6, 256.0], [30.7, 257.0], [30.8, 258.0], [30.9, 258.0], [31.0, 258.0], [31.1, 259.0], [31.2, 259.0], [31.3, 259.0], [31.4, 260.0], [31.5, 260.0], [31.6, 261.0], [31.7, 261.0], [31.8, 261.0], [31.9, 261.0], [32.0, 262.0], [32.1, 262.0], [32.2, 263.0], [32.3, 263.0], [32.4, 264.0], [32.5, 264.0], [32.6, 264.0], [32.7, 265.0], [32.8, 265.0], [32.9, 265.0], [33.0, 266.0], [33.1, 266.0], [33.2, 266.0], [33.3, 266.0], [33.4, 267.0], [33.5, 268.0], [33.6, 268.0], [33.7, 268.0], [33.8, 269.0], [33.9, 269.0], [34.0, 269.0], [34.1, 270.0], [34.2, 270.0], [34.3, 270.0], [34.4, 270.0], [34.5, 270.0], [34.6, 271.0], [34.7, 272.0], [34.8, 272.0], [34.9, 273.0], [35.0, 273.0], [35.1, 273.0], [35.2, 274.0], [35.3, 274.0], [35.4, 275.0], [35.5, 275.0], [35.6, 275.0], [35.7, 276.0], [35.8, 276.0], [35.9, 276.0], [36.0, 276.0], [36.1, 276.0], [36.2, 277.0], [36.3, 277.0], [36.4, 277.0], [36.5, 278.0], [36.6, 279.0], [36.7, 279.0], [36.8, 279.0], [36.9, 280.0], [37.0, 280.0], [37.1, 280.0], [37.2, 280.0], [37.3, 281.0], [37.4, 281.0], [37.5, 282.0], [37.6, 282.0], [37.7, 283.0], [37.8, 284.0], [37.9, 284.0], [38.0, 284.0], [38.1, 285.0], [38.2, 285.0], [38.3, 285.0], [38.4, 286.0], [38.5, 286.0], [38.6, 287.0], [38.7, 287.0], [38.8, 288.0], [38.9, 288.0], [39.0, 288.0], [39.1, 289.0], [39.2, 290.0], [39.3, 290.0], [39.4, 291.0], [39.5, 291.0], [39.6, 291.0], [39.7, 291.0], [39.8, 291.0], [39.9, 292.0], [40.0, 292.0], [40.1, 292.0], [40.2, 293.0], [40.3, 293.0], [40.4, 294.0], [40.5, 295.0], [40.6, 295.0], [40.7, 295.0], [40.8, 296.0], [40.9, 297.0], [41.0, 297.0], [41.1, 297.0], [41.2, 297.0], [41.3, 298.0], [41.4, 298.0], [41.5, 298.0], [41.6, 299.0], [41.7, 300.0], [41.8, 300.0], [41.9, 301.0], [42.0, 301.0], [42.1, 301.0], [42.2, 302.0], [42.3, 302.0], [42.4, 303.0], [42.5, 303.0], [42.6, 303.0], [42.7, 303.0], [42.8, 304.0], [42.9, 304.0], [43.0, 305.0], [43.1, 306.0], [43.2, 306.0], [43.3, 306.0], [43.4, 307.0], [43.5, 308.0], [43.6, 308.0], [43.7, 309.0], [43.8, 309.0], [43.9, 310.0], [44.0, 310.0], [44.1, 311.0], [44.2, 311.0], [44.3, 311.0], [44.4, 312.0], [44.5, 312.0], [44.6, 312.0], [44.7, 313.0], [44.8, 313.0], [44.9, 313.0], [45.0, 314.0], [45.1, 314.0], [45.2, 315.0], [45.3, 315.0], [45.4, 316.0], [45.5, 316.0], [45.6, 317.0], [45.7, 317.0], [45.8, 318.0], [45.9, 318.0], [46.0, 318.0], [46.1, 319.0], [46.2, 319.0], [46.3, 319.0], [46.4, 320.0], [46.5, 320.0], [46.6, 321.0], [46.7, 321.0], [46.8, 321.0], [46.9, 321.0], [47.0, 322.0], [47.1, 322.0], [47.2, 323.0], [47.3, 323.0], [47.4, 323.0], [47.5, 324.0], [47.6, 325.0], [47.7, 325.0], [47.8, 325.0], [47.9, 326.0], [48.0, 326.0], [48.1, 326.0], [48.2, 326.0], [48.3, 327.0], [48.4, 327.0], [48.5, 327.0], [48.6, 327.0], [48.7, 328.0], [48.8, 328.0], [48.9, 328.0], [49.0, 329.0], [49.1, 329.0], [49.2, 330.0], [49.3, 330.0], [49.4, 331.0], [49.5, 332.0], [49.6, 332.0], [49.7, 332.0], [49.8, 333.0], [49.9, 333.0], [50.0, 333.0], [50.1, 334.0], [50.2, 334.0], [50.3, 335.0], [50.4, 335.0], [50.5, 336.0], [50.6, 336.0], [50.7, 336.0], [50.8, 337.0], [50.9, 337.0], [51.0, 337.0], [51.1, 338.0], [51.2, 338.0], [51.3, 338.0], [51.4, 339.0], [51.5, 339.0], [51.6, 340.0], [51.7, 340.0], [51.8, 341.0], [51.9, 341.0], [52.0, 342.0], [52.1, 342.0], [52.2, 343.0], [52.3, 344.0], [52.4, 344.0], [52.5, 344.0], [52.6, 345.0], [52.7, 345.0], [52.8, 345.0], [52.9, 346.0], [53.0, 346.0], [53.1, 347.0], [53.2, 347.0], [53.3, 347.0], [53.4, 347.0], [53.5, 348.0], [53.6, 348.0], [53.7, 348.0], [53.8, 349.0], [53.9, 349.0], [54.0, 350.0], [54.1, 350.0], [54.2, 350.0], [54.3, 351.0], [54.4, 351.0], [54.5, 352.0], [54.6, 352.0], [54.7, 353.0], [54.8, 353.0], [54.9, 353.0], [55.0, 354.0], [55.1, 354.0], [55.2, 355.0], [55.3, 355.0], [55.4, 355.0], [55.5, 356.0], [55.6, 357.0], [55.7, 357.0], [55.8, 358.0], [55.9, 358.0], [56.0, 358.0], [56.1, 359.0], [56.2, 359.0], [56.3, 360.0], [56.4, 360.0], [56.5, 361.0], [56.6, 361.0], [56.7, 362.0], [56.8, 362.0], [56.9, 363.0], [57.0, 363.0], [57.1, 363.0], [57.2, 364.0], [57.3, 364.0], [57.4, 365.0], [57.5, 365.0], [57.6, 365.0], [57.7, 365.0], [57.8, 366.0], [57.9, 366.0], [58.0, 367.0], [58.1, 367.0], [58.2, 368.0], [58.3, 368.0], [58.4, 368.0], [58.5, 369.0], [58.6, 370.0], [58.7, 370.0], [58.8, 370.0], [58.9, 371.0], [59.0, 371.0], [59.1, 372.0], [59.2, 372.0], [59.3, 372.0], [59.4, 373.0], [59.5, 374.0], [59.6, 375.0], [59.7, 375.0], [59.8, 376.0], [59.9, 377.0], [60.0, 377.0], [60.1, 379.0], [60.2, 379.0], [60.3, 380.0], [60.4, 380.0], [60.5, 381.0], [60.6, 381.0], [60.7, 382.0], [60.8, 382.0], [60.9, 382.0], [61.0, 383.0], [61.1, 383.0], [61.2, 383.0], [61.3, 384.0], [61.4, 384.0], [61.5, 385.0], [61.6, 386.0], [61.7, 387.0], [61.8, 387.0], [61.9, 388.0], [62.0, 388.0], [62.1, 388.0], [62.2, 389.0], [62.3, 390.0], [62.4, 390.0], [62.5, 391.0], [62.6, 391.0], [62.7, 392.0], [62.8, 393.0], [62.9, 393.0], [63.0, 393.0], [63.1, 394.0], [63.2, 395.0], [63.3, 395.0], [63.4, 396.0], [63.5, 396.0], [63.6, 397.0], [63.7, 397.0], [63.8, 398.0], [63.9, 399.0], [64.0, 399.0], [64.1, 400.0], [64.2, 400.0], [64.3, 401.0], [64.4, 402.0], [64.5, 402.0], [64.6, 403.0], [64.7, 403.0], [64.8, 404.0], [64.9, 405.0], [65.0, 405.0], [65.1, 406.0], [65.2, 406.0], [65.3, 407.0], [65.4, 407.0], [65.5, 408.0], [65.6, 409.0], [65.7, 410.0], [65.8, 411.0], [65.9, 412.0], [66.0, 413.0], [66.1, 413.0], [66.2, 414.0], [66.3, 414.0], [66.4, 415.0], [66.5, 416.0], [66.6, 416.0], [66.7, 417.0], [66.8, 417.0], [66.9, 418.0], [67.0, 418.0], [67.1, 419.0], [67.2, 420.0], [67.3, 421.0], [67.4, 422.0], [67.5, 422.0], [67.6, 423.0], [67.7, 423.0], [67.8, 424.0], [67.9, 424.0], [68.0, 425.0], [68.1, 426.0], [68.2, 427.0], [68.3, 428.0], [68.4, 428.0], [68.5, 430.0], [68.6, 430.0], [68.7, 431.0], [68.8, 432.0], [68.9, 433.0], [69.0, 434.0], [69.1, 434.0], [69.2, 435.0], [69.3, 435.0], [69.4, 436.0], [69.5, 436.0], [69.6, 437.0], [69.7, 437.0], [69.8, 438.0], [69.9, 438.0], [70.0, 438.0], [70.1, 439.0], [70.2, 440.0], [70.3, 440.0], [70.4, 441.0], [70.5, 442.0], [70.6, 443.0], [70.7, 443.0], [70.8, 444.0], [70.9, 444.0], [71.0, 445.0], [71.1, 445.0], [71.2, 446.0], [71.3, 446.0], [71.4, 447.0], [71.5, 447.0], [71.6, 448.0], [71.7, 448.0], [71.8, 449.0], [71.9, 450.0], [72.0, 451.0], [72.1, 452.0], [72.2, 452.0], [72.3, 453.0], [72.4, 453.0], [72.5, 454.0], [72.6, 454.0], [72.7, 455.0], [72.8, 455.0], [72.9, 455.0], [73.0, 456.0], [73.1, 457.0], [73.2, 458.0], [73.3, 458.0], [73.4, 459.0], [73.5, 459.0], [73.6, 461.0], [73.7, 462.0], [73.8, 462.0], [73.9, 463.0], [74.0, 463.0], [74.1, 464.0], [74.2, 464.0], [74.3, 466.0], [74.4, 466.0], [74.5, 467.0], [74.6, 468.0], [74.7, 468.0], [74.8, 469.0], [74.9, 470.0], [75.0, 471.0], [75.1, 472.0], [75.2, 472.0], [75.3, 473.0], [75.4, 473.0], [75.5, 474.0], [75.6, 474.0], [75.7, 475.0], [75.8, 476.0], [75.9, 476.0], [76.0, 477.0], [76.1, 478.0], [76.2, 478.0], [76.3, 479.0], [76.4, 480.0], [76.5, 481.0], [76.6, 482.0], [76.7, 483.0], [76.8, 484.0], [76.9, 484.0], [77.0, 485.0], [77.1, 487.0], [77.2, 487.0], [77.3, 488.0], [77.4, 490.0], [77.5, 490.0], [77.6, 491.0], [77.7, 491.0], [77.8, 492.0], [77.9, 493.0], [78.0, 494.0], [78.1, 494.0], [78.2, 496.0], [78.3, 497.0], [78.4, 498.0], [78.5, 498.0], [78.6, 499.0], [78.7, 500.0], [78.8, 501.0], [78.9, 502.0], [79.0, 503.0], [79.1, 503.0], [79.2, 504.0], [79.3, 505.0], [79.4, 507.0], [79.5, 507.0], [79.6, 508.0], [79.7, 509.0], [79.8, 510.0], [79.9, 512.0], [80.0, 513.0], [80.1, 513.0], [80.2, 515.0], [80.3, 515.0], [80.4, 516.0], [80.5, 517.0], [80.6, 518.0], [80.7, 519.0], [80.8, 519.0], [80.9, 521.0], [81.0, 522.0], [81.1, 523.0], [81.2, 524.0], [81.3, 525.0], [81.4, 526.0], [81.5, 528.0], [81.6, 529.0], [81.7, 530.0], [81.8, 532.0], [81.9, 533.0], [82.0, 534.0], [82.1, 534.0], [82.2, 537.0], [82.3, 537.0], [82.4, 538.0], [82.5, 539.0], [82.6, 540.0], [82.7, 541.0], [82.8, 543.0], [82.9, 544.0], [83.0, 545.0], [83.1, 546.0], [83.2, 547.0], [83.3, 548.0], [83.4, 550.0], [83.5, 551.0], [83.6, 552.0], [83.7, 553.0], [83.8, 555.0], [83.9, 556.0], [84.0, 557.0], [84.1, 558.0], [84.2, 559.0], [84.3, 560.0], [84.4, 561.0], [84.5, 562.0], [84.6, 563.0], [84.7, 564.0], [84.8, 565.0], [84.9, 566.0], [85.0, 566.0], [85.1, 568.0], [85.2, 570.0], [85.3, 572.0], [85.4, 574.0], [85.5, 575.0], [85.6, 577.0], [85.7, 577.0], [85.8, 579.0], [85.9, 581.0], [86.0, 582.0], [86.1, 584.0], [86.2, 586.0], [86.3, 587.0], [86.4, 589.0], [86.5, 591.0], [86.6, 591.0], [86.7, 594.0], [86.8, 596.0], [86.9, 600.0], [87.0, 602.0], [87.1, 604.0], [87.2, 606.0], [87.3, 608.0], [87.4, 611.0], [87.5, 613.0], [87.6, 614.0], [87.7, 616.0], [87.8, 616.0], [87.9, 617.0], [88.0, 619.0], [88.1, 620.0], [88.2, 622.0], [88.3, 623.0], [88.4, 625.0], [88.5, 626.0], [88.6, 629.0], [88.7, 630.0], [88.8, 632.0], [88.9, 634.0], [89.0, 637.0], [89.1, 639.0], [89.2, 641.0], [89.3, 644.0], [89.4, 645.0], [89.5, 648.0], [89.6, 650.0], [89.7, 653.0], [89.8, 656.0], [89.9, 659.0], [90.0, 662.0], [90.1, 665.0], [90.2, 669.0], [90.3, 670.0], [90.4, 672.0], [90.5, 674.0], [90.6, 677.0], [90.7, 680.0], [90.8, 683.0], [90.9, 685.0], [91.0, 688.0], [91.1, 696.0], [91.2, 699.0], [91.3, 703.0], [91.4, 707.0], [91.5, 708.0], [91.6, 711.0], [91.7, 717.0], [91.8, 719.0], [91.9, 724.0], [92.0, 724.0], [92.1, 726.0], [92.2, 730.0], [92.3, 732.0], [92.4, 735.0], [92.5, 739.0], [92.6, 743.0], [92.7, 745.0], [92.8, 747.0], [92.9, 749.0], [93.0, 752.0], [93.1, 756.0], [93.2, 761.0], [93.3, 767.0], [93.4, 771.0], [93.5, 774.0], [93.6, 778.0], [93.7, 785.0], [93.8, 800.0], [93.9, 809.0], [94.0, 812.0], [94.1, 816.0], [94.2, 822.0], [94.3, 839.0], [94.4, 847.0], [94.5, 855.0], [94.6, 863.0], [94.7, 871.0], [94.8, 881.0], [94.9, 885.0], [95.0, 890.0], [95.1, 897.0], [95.2, 906.0], [95.3, 925.0], [95.4, 941.0], [95.5, 948.0], [95.6, 970.0], [95.7, 989.0], [95.8, 1007.0], [95.9, 1015.0], [96.0, 1037.0], [96.1, 1048.0], [96.2, 1057.0], [96.3, 1088.0], [96.4, 1132.0], [96.5, 1138.0], [96.6, 1150.0], [96.7, 1168.0], [96.8, 1184.0], [96.9, 1237.0], [97.0, 1262.0], [97.1, 1290.0], [97.2, 1326.0], [97.3, 1347.0], [97.4, 1373.0], [97.5, 1402.0], [97.6, 1427.0], [97.7, 1466.0], [97.8, 1514.0], [97.9, 1538.0], [98.0, 1581.0], [98.1, 1632.0], [98.2, 1686.0], [98.3, 1701.0], [98.4, 1739.0], [98.5, 1764.0], [98.6, 1821.0], [98.7, 1833.0], [98.8, 1868.0], [98.9, 1964.0], [99.0, 2027.0], [99.1, 2080.0], [99.2, 2208.0], [99.3, 2311.0], [99.4, 2944.0], [99.5, 3589.0], [99.6, 3696.0], [99.7, 3946.0], [99.8, 4392.0], [99.9, 6113.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1276.0, "series": [{"data": [[0.0, 190.0], [600.0, 225.0], [700.0, 134.0], [800.0, 70.0], [900.0, 33.0], [1000.0, 29.0], [1100.0, 27.0], [1200.0, 14.0], [1300.0, 18.0], [1400.0, 15.0], [1500.0, 14.0], [100.0, 697.0], [1600.0, 13.0], [1700.0, 15.0], [1800.0, 14.0], [1900.0, 5.0], [2000.0, 11.0], [2100.0, 2.0], [2200.0, 5.0], [2300.0, 2.0], [2400.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [200.0, 1276.0], [3200.0, 2.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 5.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4600.0, 2.0], [300.0, 1159.0], [4700.0, 1.0], [5600.0, 1.0], [6100.0, 1.0], [400.0, 759.0], [6500.0, 1.0], [6800.0, 1.0], [6700.0, 1.0], [6900.0, 1.0], [7600.0, 1.0], [500.0, 428.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 116.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4086.0, "series": [{"data": [[0.0, 4086.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 988.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.548387096774194, "minX": 1.60266396E12, "maxY": 10.0, "series": [{"data": [[1.6026642E12, 8.548387096774194], [1.60266402E12, 10.0], [1.60266396E12, 9.997596153846168], [1.60266414E12, 10.0], [1.60266408E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 617.0, "series": [{"data": [[8.0, 439.0], [4.0, 349.0], [2.0, 425.0], [1.0, 617.0], [9.0, 321.0], [10.0, 418.2368725868732], [5.0, 318.0], [6.0, 258.0], [3.0, 266.0], [7.0, 275.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 418.1452793834284]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 216.68333333333334, "minX": 1.60266396E12, "maxY": 1.0603524033333333E7, "series": [{"data": [[1.6026642E12, 266955.13333333336], [1.60266402E12, 1.0142688416666666E7], [1.60266396E12, 5558737.4], [1.60266414E12, 1.0603524033333333E7], [1.60266408E12, 9405593.883333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6026642E12, 216.68333333333334], [1.60266402E12, 9425.75], [1.60266396E12, 5520.366666666667], [1.60266414E12, 10057.966666666667], [1.60266408E12, 9923.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 396.09677419354836, "minX": 1.60266396E12, "maxY": 437.943600867679, "series": [{"data": [[1.6026642E12, 396.09677419354836], [1.60266402E12, 437.943600867679], [1.60266396E12, 428.5913461538459], [1.60266414E12, 408.98768809849565], [1.60266408E12, 403.30026990553307]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 393.0322580645161, "minX": 1.60266396E12, "maxY": 433.6276211135212, "series": [{"data": [[1.6026642E12, 393.0322580645161], [1.60266402E12, 433.6276211135212], [1.60266396E12, 424.777644230769], [1.60266414E12, 405.3953488372088], [1.60266408E12, 399.28677462888004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60266396E12, "maxY": 0.10456730769230796, "series": [{"data": [[1.6026642E12, 0.0], [1.60266402E12, 0.006507592190889362], [1.60266396E12, 0.10456730769230796], [1.60266414E12, 0.00752393980848154], [1.60266408E12, 0.005398110661268566]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60266396E12, "maxY": 7663.0, "series": [{"data": [[1.6026642E12, 1048.0], [1.60266402E12, 7663.0], [1.60266396E12, 6830.0], [1.60266414E12, 6940.0], [1.60266408E12, 4392.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6026642E12, 205.0], [1.60266402E12, 17.911999340057374], [1.60266396E12, 14.0], [1.60266414E12, 29.333999302387237], [1.60266408E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6026642E12, 205.0], [1.60266402E12, 20.40320026397705], [1.60266396E12, 14.246700079441071], [1.60266414E12, 35.35330125570297], [1.60266408E12, 14.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6026642E12, 205.0], [1.60266402E12, 19.295999670028685], [1.60266396E12, 14.0], [1.60266414E12, 30.796999651193616], [1.60266408E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6026642E12, 205.0], [1.60266402E12, 3.0], [1.60266396E12, 13.0], [1.60266414E12, 3.0], [1.60266408E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6026642E12, 349.0], [1.60266402E12, 353.0], [1.60266396E12, 308.5], [1.60266414E12, 354.0], [1.60266408E12, 315.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 32.0, "minX": 2.0, "maxY": 4796.5, "series": [{"data": [[32.0, 275.5], [2.0, 4796.5], [33.0, 275.0], [34.0, 260.5], [35.0, 246.0], [36.0, 284.0], [37.0, 220.0], [39.0, 229.0], [38.0, 237.0], [42.0, 240.5], [4.0, 521.0], [5.0, 1690.0], [6.0, 276.0], [7.0, 597.5], [8.0, 371.0], [9.0, 786.0], [10.0, 511.0], [11.0, 619.0], [12.0, 589.5], [13.0, 32.0], [14.0, 587.5], [15.0, 405.5], [16.0, 384.5], [17.0, 462.0], [18.0, 423.5], [19.0, 395.0], [20.0, 367.5], [21.0, 424.0], [22.0, 388.0], [23.0, 372.0], [24.0, 362.5], [25.0, 348.5], [26.0, 329.5], [27.0, 344.0], [28.0, 326.5], [29.0, 302.0], [30.0, 307.0], [31.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 32.0, "minX": 2.0, "maxY": 4793.5, "series": [{"data": [[32.0, 272.5], [2.0, 4793.5], [33.0, 273.0], [34.0, 258.0], [35.0, 242.0], [36.0, 278.0], [37.0, 219.0], [39.0, 222.0], [38.0, 229.5], [42.0, 236.5], [4.0, 518.5], [5.0, 1677.0], [6.0, 275.5], [7.0, 593.5], [8.0, 364.0], [9.0, 784.5], [10.0, 504.5], [11.0, 616.0], [12.0, 587.5], [13.0, 32.0], [14.0, 580.5], [15.0, 405.0], [16.0, 375.5], [17.0, 459.0], [18.0, 416.5], [19.0, 394.0], [20.0, 362.0], [21.0, 417.0], [22.0, 381.0], [23.0, 366.0], [24.0, 358.0], [25.0, 345.0], [26.0, 325.0], [27.0, 339.0], [28.0, 325.5], [29.0, 296.0], [30.0, 302.0], [31.0, 283.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60266396E12, "maxY": 24.7, "series": [{"data": [[1.6026642E12, 0.35], [1.60266402E12, 23.05], [1.60266396E12, 14.033333333333333], [1.60266414E12, 24.366666666666667], [1.60266408E12, 24.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60266396E12, "maxY": 24.7, "series": [{"data": [[1.6026642E12, 0.5166666666666667], [1.60266402E12, 23.05], [1.60266396E12, 13.866666666666667], [1.60266414E12, 24.366666666666667], [1.60266408E12, 24.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60266396E12, "maxY": 24.7, "series": [{"data": [[1.6026642E12, 0.5166666666666667], [1.60266402E12, 23.05], [1.60266396E12, 13.866666666666667], [1.60266414E12, 24.366666666666667], [1.60266408E12, 24.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60266396E12, "maxY": 24.7, "series": [{"data": [[1.6026642E12, 0.5166666666666667], [1.60266402E12, 23.05], [1.60266396E12, 13.866666666666667], [1.60266414E12, 24.366666666666667], [1.60266408E12, 24.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026642E12, "title": "Total Transactions Per Second"}},
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

