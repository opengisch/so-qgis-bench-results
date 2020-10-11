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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 7535.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 9.0], [0.3, 12.0], [0.4, 13.0], [0.5, 13.0], [0.6, 14.0], [0.7, 14.0], [0.8, 16.0], [0.9, 19.0], [1.0, 21.0], [1.1, 23.0], [1.2, 24.0], [1.3, 25.0], [1.4, 26.0], [1.5, 27.0], [1.6, 28.0], [1.7, 29.0], [1.8, 31.0], [1.9, 32.0], [2.0, 33.0], [2.1, 35.0], [2.2, 39.0], [2.3, 43.0], [2.4, 43.0], [2.5, 45.0], [2.6, 47.0], [2.7, 50.0], [2.8, 55.0], [2.9, 60.0], [3.0, 67.0], [3.1, 68.0], [3.2, 75.0], [3.3, 77.0], [3.4, 85.0], [3.5, 93.0], [3.6, 101.0], [3.7, 105.0], [3.8, 106.0], [3.9, 111.0], [4.0, 114.0], [4.1, 116.0], [4.2, 117.0], [4.3, 119.0], [4.4, 120.0], [4.5, 121.0], [4.6, 122.0], [4.7, 123.0], [4.8, 123.0], [4.9, 124.0], [5.0, 124.0], [5.1, 125.0], [5.2, 126.0], [5.3, 127.0], [5.4, 128.0], [5.5, 129.0], [5.6, 129.0], [5.7, 130.0], [5.8, 130.0], [5.9, 131.0], [6.0, 131.0], [6.1, 132.0], [6.2, 133.0], [6.3, 134.0], [6.4, 135.0], [6.5, 135.0], [6.6, 135.0], [6.7, 136.0], [6.8, 137.0], [6.9, 137.0], [7.0, 138.0], [7.1, 139.0], [7.2, 139.0], [7.3, 139.0], [7.4, 140.0], [7.5, 140.0], [7.6, 141.0], [7.7, 142.0], [7.8, 142.0], [7.9, 143.0], [8.0, 143.0], [8.1, 144.0], [8.2, 144.0], [8.3, 145.0], [8.4, 145.0], [8.5, 146.0], [8.6, 147.0], [8.7, 148.0], [8.8, 148.0], [8.9, 149.0], [9.0, 149.0], [9.1, 150.0], [9.2, 151.0], [9.3, 151.0], [9.4, 151.0], [9.5, 152.0], [9.6, 152.0], [9.7, 153.0], [9.8, 153.0], [9.9, 153.0], [10.0, 154.0], [10.1, 155.0], [10.2, 155.0], [10.3, 156.0], [10.4, 156.0], [10.5, 157.0], [10.6, 158.0], [10.7, 158.0], [10.8, 159.0], [10.9, 159.0], [11.0, 160.0], [11.1, 160.0], [11.2, 161.0], [11.3, 161.0], [11.4, 161.0], [11.5, 162.0], [11.6, 162.0], [11.7, 163.0], [11.8, 164.0], [11.9, 164.0], [12.0, 164.0], [12.1, 165.0], [12.2, 165.0], [12.3, 166.0], [12.4, 166.0], [12.5, 167.0], [12.6, 167.0], [12.7, 168.0], [12.8, 168.0], [12.9, 168.0], [13.0, 169.0], [13.1, 170.0], [13.2, 170.0], [13.3, 171.0], [13.4, 171.0], [13.5, 172.0], [13.6, 172.0], [13.7, 173.0], [13.8, 173.0], [13.9, 174.0], [14.0, 174.0], [14.1, 175.0], [14.2, 175.0], [14.3, 175.0], [14.4, 176.0], [14.5, 176.0], [14.6, 176.0], [14.7, 177.0], [14.8, 177.0], [14.9, 178.0], [15.0, 178.0], [15.1, 179.0], [15.2, 179.0], [15.3, 180.0], [15.4, 180.0], [15.5, 181.0], [15.6, 181.0], [15.7, 182.0], [15.8, 182.0], [15.9, 182.0], [16.0, 183.0], [16.1, 184.0], [16.2, 184.0], [16.3, 185.0], [16.4, 185.0], [16.5, 186.0], [16.6, 186.0], [16.7, 186.0], [16.8, 187.0], [16.9, 187.0], [17.0, 188.0], [17.1, 188.0], [17.2, 189.0], [17.3, 189.0], [17.4, 190.0], [17.5, 191.0], [17.6, 191.0], [17.7, 192.0], [17.8, 193.0], [17.9, 193.0], [18.0, 194.0], [18.1, 194.0], [18.2, 195.0], [18.3, 195.0], [18.4, 196.0], [18.5, 197.0], [18.6, 197.0], [18.7, 197.0], [18.8, 198.0], [18.9, 199.0], [19.0, 199.0], [19.1, 200.0], [19.2, 200.0], [19.3, 201.0], [19.4, 202.0], [19.5, 202.0], [19.6, 202.0], [19.7, 203.0], [19.8, 204.0], [19.9, 204.0], [20.0, 205.0], [20.1, 205.0], [20.2, 206.0], [20.3, 206.0], [20.4, 206.0], [20.5, 207.0], [20.6, 208.0], [20.7, 208.0], [20.8, 209.0], [20.9, 209.0], [21.0, 209.0], [21.1, 210.0], [21.2, 210.0], [21.3, 211.0], [21.4, 211.0], [21.5, 211.0], [21.6, 212.0], [21.7, 212.0], [21.8, 213.0], [21.9, 213.0], [22.0, 213.0], [22.1, 214.0], [22.2, 214.0], [22.3, 215.0], [22.4, 215.0], [22.5, 215.0], [22.6, 216.0], [22.7, 216.0], [22.8, 217.0], [22.9, 217.0], [23.0, 218.0], [23.1, 218.0], [23.2, 218.0], [23.3, 219.0], [23.4, 220.0], [23.5, 221.0], [23.6, 221.0], [23.7, 222.0], [23.8, 222.0], [23.9, 222.0], [24.0, 223.0], [24.1, 224.0], [24.2, 224.0], [24.3, 225.0], [24.4, 225.0], [24.5, 226.0], [24.6, 226.0], [24.7, 226.0], [24.8, 226.0], [24.9, 227.0], [25.0, 227.0], [25.1, 227.0], [25.2, 227.0], [25.3, 228.0], [25.4, 229.0], [25.5, 229.0], [25.6, 230.0], [25.7, 230.0], [25.8, 230.0], [25.9, 231.0], [26.0, 231.0], [26.1, 231.0], [26.2, 232.0], [26.3, 233.0], [26.4, 233.0], [26.5, 234.0], [26.6, 234.0], [26.7, 235.0], [26.8, 235.0], [26.9, 235.0], [27.0, 236.0], [27.1, 237.0], [27.2, 237.0], [27.3, 237.0], [27.4, 238.0], [27.5, 238.0], [27.6, 239.0], [27.7, 239.0], [27.8, 240.0], [27.9, 240.0], [28.0, 241.0], [28.1, 241.0], [28.2, 242.0], [28.3, 243.0], [28.4, 243.0], [28.5, 243.0], [28.6, 244.0], [28.7, 244.0], [28.8, 245.0], [28.9, 246.0], [29.0, 246.0], [29.1, 246.0], [29.2, 247.0], [29.3, 247.0], [29.4, 247.0], [29.5, 247.0], [29.6, 248.0], [29.7, 248.0], [29.8, 249.0], [29.9, 250.0], [30.0, 250.0], [30.1, 250.0], [30.2, 251.0], [30.3, 251.0], [30.4, 252.0], [30.5, 252.0], [30.6, 253.0], [30.7, 253.0], [30.8, 254.0], [30.9, 254.0], [31.0, 254.0], [31.1, 255.0], [31.2, 255.0], [31.3, 255.0], [31.4, 255.0], [31.5, 256.0], [31.6, 256.0], [31.7, 256.0], [31.8, 257.0], [31.9, 258.0], [32.0, 258.0], [32.1, 259.0], [32.2, 259.0], [32.3, 259.0], [32.4, 260.0], [32.5, 261.0], [32.6, 261.0], [32.7, 262.0], [32.8, 262.0], [32.9, 263.0], [33.0, 263.0], [33.1, 263.0], [33.2, 263.0], [33.3, 264.0], [33.4, 264.0], [33.5, 264.0], [33.6, 265.0], [33.7, 265.0], [33.8, 265.0], [33.9, 266.0], [34.0, 266.0], [34.1, 266.0], [34.2, 267.0], [34.3, 267.0], [34.4, 268.0], [34.5, 268.0], [34.6, 269.0], [34.7, 269.0], [34.8, 269.0], [34.9, 270.0], [35.0, 270.0], [35.1, 271.0], [35.2, 271.0], [35.3, 271.0], [35.4, 271.0], [35.5, 272.0], [35.6, 272.0], [35.7, 272.0], [35.8, 273.0], [35.9, 273.0], [36.0, 273.0], [36.1, 273.0], [36.2, 274.0], [36.3, 274.0], [36.4, 275.0], [36.5, 275.0], [36.6, 275.0], [36.7, 275.0], [36.8, 276.0], [36.9, 276.0], [37.0, 276.0], [37.1, 276.0], [37.2, 277.0], [37.3, 277.0], [37.4, 278.0], [37.5, 278.0], [37.6, 278.0], [37.7, 279.0], [37.8, 279.0], [37.9, 279.0], [38.0, 280.0], [38.1, 280.0], [38.2, 280.0], [38.3, 281.0], [38.4, 282.0], [38.5, 282.0], [38.6, 282.0], [38.7, 283.0], [38.8, 283.0], [38.9, 283.0], [39.0, 284.0], [39.1, 284.0], [39.2, 285.0], [39.3, 285.0], [39.4, 286.0], [39.5, 286.0], [39.6, 287.0], [39.7, 287.0], [39.8, 288.0], [39.9, 288.0], [40.0, 288.0], [40.1, 289.0], [40.2, 289.0], [40.3, 289.0], [40.4, 290.0], [40.5, 290.0], [40.6, 291.0], [40.7, 291.0], [40.8, 291.0], [40.9, 291.0], [41.0, 292.0], [41.1, 292.0], [41.2, 293.0], [41.3, 293.0], [41.4, 293.0], [41.5, 294.0], [41.6, 294.0], [41.7, 294.0], [41.8, 295.0], [41.9, 295.0], [42.0, 295.0], [42.1, 296.0], [42.2, 297.0], [42.3, 297.0], [42.4, 297.0], [42.5, 298.0], [42.6, 298.0], [42.7, 299.0], [42.8, 299.0], [42.9, 299.0], [43.0, 300.0], [43.1, 300.0], [43.2, 300.0], [43.3, 301.0], [43.4, 302.0], [43.5, 302.0], [43.6, 302.0], [43.7, 303.0], [43.8, 303.0], [43.9, 303.0], [44.0, 304.0], [44.1, 305.0], [44.2, 305.0], [44.3, 306.0], [44.4, 306.0], [44.5, 307.0], [44.6, 308.0], [44.7, 308.0], [44.8, 308.0], [44.9, 308.0], [45.0, 309.0], [45.1, 309.0], [45.2, 309.0], [45.3, 310.0], [45.4, 310.0], [45.5, 311.0], [45.6, 311.0], [45.7, 311.0], [45.8, 312.0], [45.9, 312.0], [46.0, 313.0], [46.1, 313.0], [46.2, 314.0], [46.3, 314.0], [46.4, 314.0], [46.5, 315.0], [46.6, 315.0], [46.7, 316.0], [46.8, 316.0], [46.9, 316.0], [47.0, 316.0], [47.1, 317.0], [47.2, 317.0], [47.3, 317.0], [47.4, 318.0], [47.5, 318.0], [47.6, 319.0], [47.7, 319.0], [47.8, 320.0], [47.9, 320.0], [48.0, 321.0], [48.1, 321.0], [48.2, 322.0], [48.3, 322.0], [48.4, 322.0], [48.5, 323.0], [48.6, 324.0], [48.7, 324.0], [48.8, 325.0], [48.9, 326.0], [49.0, 326.0], [49.1, 326.0], [49.2, 327.0], [49.3, 327.0], [49.4, 328.0], [49.5, 328.0], [49.6, 329.0], [49.7, 329.0], [49.8, 329.0], [49.9, 330.0], [50.0, 330.0], [50.1, 330.0], [50.2, 330.0], [50.3, 331.0], [50.4, 331.0], [50.5, 331.0], [50.6, 332.0], [50.7, 332.0], [50.8, 333.0], [50.9, 333.0], [51.0, 333.0], [51.1, 334.0], [51.2, 334.0], [51.3, 334.0], [51.4, 335.0], [51.5, 335.0], [51.6, 335.0], [51.7, 336.0], [51.8, 336.0], [51.9, 336.0], [52.0, 336.0], [52.1, 337.0], [52.2, 337.0], [52.3, 338.0], [52.4, 338.0], [52.5, 338.0], [52.6, 339.0], [52.7, 339.0], [52.8, 339.0], [52.9, 340.0], [53.0, 340.0], [53.1, 340.0], [53.2, 341.0], [53.3, 341.0], [53.4, 342.0], [53.5, 342.0], [53.6, 342.0], [53.7, 342.0], [53.8, 343.0], [53.9, 343.0], [54.0, 344.0], [54.1, 344.0], [54.2, 344.0], [54.3, 345.0], [54.4, 345.0], [54.5, 345.0], [54.6, 346.0], [54.7, 346.0], [54.8, 347.0], [54.9, 347.0], [55.0, 347.0], [55.1, 347.0], [55.2, 347.0], [55.3, 348.0], [55.4, 349.0], [55.5, 349.0], [55.6, 349.0], [55.7, 349.0], [55.8, 350.0], [55.9, 350.0], [56.0, 351.0], [56.1, 351.0], [56.2, 351.0], [56.3, 352.0], [56.4, 352.0], [56.5, 352.0], [56.6, 353.0], [56.7, 353.0], [56.8, 354.0], [56.9, 355.0], [57.0, 355.0], [57.1, 356.0], [57.2, 356.0], [57.3, 356.0], [57.4, 357.0], [57.5, 357.0], [57.6, 357.0], [57.7, 358.0], [57.8, 359.0], [57.9, 359.0], [58.0, 360.0], [58.1, 360.0], [58.2, 361.0], [58.3, 361.0], [58.4, 362.0], [58.5, 362.0], [58.6, 363.0], [58.7, 363.0], [58.8, 363.0], [58.9, 364.0], [59.0, 364.0], [59.1, 365.0], [59.2, 365.0], [59.3, 366.0], [59.4, 366.0], [59.5, 367.0], [59.6, 367.0], [59.7, 367.0], [59.8, 368.0], [59.9, 368.0], [60.0, 368.0], [60.1, 369.0], [60.2, 369.0], [60.3, 370.0], [60.4, 370.0], [60.5, 370.0], [60.6, 371.0], [60.7, 371.0], [60.8, 372.0], [60.9, 372.0], [61.0, 373.0], [61.1, 373.0], [61.2, 373.0], [61.3, 374.0], [61.4, 375.0], [61.5, 375.0], [61.6, 375.0], [61.7, 375.0], [61.8, 376.0], [61.9, 377.0], [62.0, 377.0], [62.1, 378.0], [62.2, 379.0], [62.3, 379.0], [62.4, 380.0], [62.5, 381.0], [62.6, 381.0], [62.7, 382.0], [62.8, 383.0], [62.9, 383.0], [63.0, 384.0], [63.1, 384.0], [63.2, 385.0], [63.3, 385.0], [63.4, 386.0], [63.5, 386.0], [63.6, 387.0], [63.7, 387.0], [63.8, 388.0], [63.9, 388.0], [64.0, 389.0], [64.1, 389.0], [64.2, 389.0], [64.3, 390.0], [64.4, 391.0], [64.5, 392.0], [64.6, 393.0], [64.7, 394.0], [64.8, 394.0], [64.9, 395.0], [65.0, 396.0], [65.1, 396.0], [65.2, 397.0], [65.3, 397.0], [65.4, 397.0], [65.5, 398.0], [65.6, 398.0], [65.7, 399.0], [65.8, 399.0], [65.9, 400.0], [66.0, 400.0], [66.1, 401.0], [66.2, 402.0], [66.3, 402.0], [66.4, 402.0], [66.5, 403.0], [66.6, 403.0], [66.7, 404.0], [66.8, 404.0], [66.9, 405.0], [67.0, 406.0], [67.1, 407.0], [67.2, 408.0], [67.3, 408.0], [67.4, 408.0], [67.5, 409.0], [67.6, 409.0], [67.7, 410.0], [67.8, 411.0], [67.9, 412.0], [68.0, 412.0], [68.1, 413.0], [68.2, 413.0], [68.3, 414.0], [68.4, 415.0], [68.5, 415.0], [68.6, 416.0], [68.7, 417.0], [68.8, 417.0], [68.9, 418.0], [69.0, 419.0], [69.1, 419.0], [69.2, 420.0], [69.3, 420.0], [69.4, 421.0], [69.5, 422.0], [69.6, 423.0], [69.7, 423.0], [69.8, 425.0], [69.9, 425.0], [70.0, 426.0], [70.1, 427.0], [70.2, 427.0], [70.3, 428.0], [70.4, 429.0], [70.5, 430.0], [70.6, 430.0], [70.7, 430.0], [70.8, 431.0], [70.9, 432.0], [71.0, 432.0], [71.1, 433.0], [71.2, 433.0], [71.3, 434.0], [71.4, 435.0], [71.5, 435.0], [71.6, 437.0], [71.7, 437.0], [71.8, 438.0], [71.9, 438.0], [72.0, 439.0], [72.1, 439.0], [72.2, 440.0], [72.3, 441.0], [72.4, 441.0], [72.5, 442.0], [72.6, 442.0], [72.7, 443.0], [72.8, 443.0], [72.9, 444.0], [73.0, 445.0], [73.1, 446.0], [73.2, 447.0], [73.3, 447.0], [73.4, 447.0], [73.5, 448.0], [73.6, 448.0], [73.7, 449.0], [73.8, 449.0], [73.9, 450.0], [74.0, 451.0], [74.1, 452.0], [74.2, 452.0], [74.3, 453.0], [74.4, 453.0], [74.5, 454.0], [74.6, 455.0], [74.7, 455.0], [74.8, 456.0], [74.9, 457.0], [75.0, 458.0], [75.1, 459.0], [75.2, 460.0], [75.3, 461.0], [75.4, 461.0], [75.5, 463.0], [75.6, 463.0], [75.7, 464.0], [75.8, 465.0], [75.9, 466.0], [76.0, 467.0], [76.1, 467.0], [76.2, 468.0], [76.3, 468.0], [76.4, 470.0], [76.5, 470.0], [76.6, 471.0], [76.7, 471.0], [76.8, 473.0], [76.9, 473.0], [77.0, 474.0], [77.1, 475.0], [77.2, 475.0], [77.3, 476.0], [77.4, 477.0], [77.5, 478.0], [77.6, 478.0], [77.7, 479.0], [77.8, 479.0], [77.9, 480.0], [78.0, 481.0], [78.1, 482.0], [78.2, 483.0], [78.3, 484.0], [78.4, 485.0], [78.5, 485.0], [78.6, 487.0], [78.7, 488.0], [78.8, 489.0], [78.9, 490.0], [79.0, 491.0], [79.1, 491.0], [79.2, 492.0], [79.3, 492.0], [79.4, 494.0], [79.5, 495.0], [79.6, 496.0], [79.7, 496.0], [79.8, 497.0], [79.9, 498.0], [80.0, 498.0], [80.1, 499.0], [80.2, 500.0], [80.3, 501.0], [80.4, 502.0], [80.5, 503.0], [80.6, 503.0], [80.7, 505.0], [80.8, 508.0], [80.9, 508.0], [81.0, 509.0], [81.1, 509.0], [81.2, 510.0], [81.3, 512.0], [81.4, 514.0], [81.5, 515.0], [81.6, 517.0], [81.7, 517.0], [81.8, 519.0], [81.9, 520.0], [82.0, 520.0], [82.1, 521.0], [82.2, 523.0], [82.3, 525.0], [82.4, 526.0], [82.5, 528.0], [82.6, 529.0], [82.7, 530.0], [82.8, 532.0], [82.9, 533.0], [83.0, 534.0], [83.1, 534.0], [83.2, 536.0], [83.3, 537.0], [83.4, 538.0], [83.5, 540.0], [83.6, 541.0], [83.7, 543.0], [83.8, 544.0], [83.9, 545.0], [84.0, 545.0], [84.1, 547.0], [84.2, 549.0], [84.3, 550.0], [84.4, 551.0], [84.5, 552.0], [84.6, 553.0], [84.7, 554.0], [84.8, 555.0], [84.9, 556.0], [85.0, 558.0], [85.1, 558.0], [85.2, 561.0], [85.3, 562.0], [85.4, 562.0], [85.5, 563.0], [85.6, 564.0], [85.7, 566.0], [85.8, 569.0], [85.9, 569.0], [86.0, 571.0], [86.1, 572.0], [86.2, 573.0], [86.3, 573.0], [86.4, 574.0], [86.5, 576.0], [86.6, 576.0], [86.7, 577.0], [86.8, 579.0], [86.9, 580.0], [87.0, 582.0], [87.1, 583.0], [87.2, 584.0], [87.3, 587.0], [87.4, 588.0], [87.5, 590.0], [87.6, 591.0], [87.7, 593.0], [87.8, 594.0], [87.9, 596.0], [88.0, 597.0], [88.1, 598.0], [88.2, 602.0], [88.3, 604.0], [88.4, 606.0], [88.5, 609.0], [88.6, 610.0], [88.7, 611.0], [88.8, 612.0], [88.9, 614.0], [89.0, 615.0], [89.1, 617.0], [89.2, 619.0], [89.3, 621.0], [89.4, 623.0], [89.5, 625.0], [89.6, 627.0], [89.7, 628.0], [89.8, 631.0], [89.9, 636.0], [90.0, 639.0], [90.1, 641.0], [90.2, 642.0], [90.3, 643.0], [90.4, 645.0], [90.5, 647.0], [90.6, 650.0], [90.7, 653.0], [90.8, 656.0], [90.9, 658.0], [91.0, 659.0], [91.1, 662.0], [91.2, 665.0], [91.3, 669.0], [91.4, 672.0], [91.5, 675.0], [91.6, 681.0], [91.7, 685.0], [91.8, 687.0], [91.9, 689.0], [92.0, 692.0], [92.1, 695.0], [92.2, 700.0], [92.3, 703.0], [92.4, 703.0], [92.5, 705.0], [92.6, 707.0], [92.7, 710.0], [92.8, 715.0], [92.9, 718.0], [93.0, 719.0], [93.1, 724.0], [93.2, 732.0], [93.3, 737.0], [93.4, 740.0], [93.5, 747.0], [93.6, 751.0], [93.7, 761.0], [93.8, 767.0], [93.9, 772.0], [94.0, 773.0], [94.1, 776.0], [94.2, 784.0], [94.3, 794.0], [94.4, 799.0], [94.5, 813.0], [94.6, 820.0], [94.7, 831.0], [94.8, 839.0], [94.9, 844.0], [95.0, 848.0], [95.1, 853.0], [95.2, 854.0], [95.3, 871.0], [95.4, 881.0], [95.5, 904.0], [95.6, 907.0], [95.7, 919.0], [95.8, 933.0], [95.9, 940.0], [96.0, 954.0], [96.1, 972.0], [96.2, 986.0], [96.3, 1010.0], [96.4, 1039.0], [96.5, 1049.0], [96.6, 1076.0], [96.7, 1090.0], [96.8, 1119.0], [96.9, 1142.0], [97.0, 1182.0], [97.1, 1195.0], [97.2, 1253.0], [97.3, 1298.0], [97.4, 1317.0], [97.5, 1358.0], [97.6, 1378.0], [97.7, 1403.0], [97.8, 1423.0], [97.9, 1477.0], [98.0, 1509.0], [98.1, 1562.0], [98.2, 1594.0], [98.3, 1629.0], [98.4, 1667.0], [98.5, 1727.0], [98.6, 1750.0], [98.7, 1797.0], [98.8, 1835.0], [98.9, 1908.0], [99.0, 1961.0], [99.1, 2007.0], [99.2, 2150.0], [99.3, 2346.0], [99.4, 2847.0], [99.5, 3276.0], [99.6, 3737.0], [99.7, 3921.0], [99.8, 4184.0], [99.9, 5568.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1237.0, "series": [{"data": [[0.0, 186.0], [600.0, 210.0], [700.0, 116.0], [800.0, 55.0], [900.0, 40.0], [1000.0, 26.0], [1100.0, 19.0], [1200.0, 10.0], [1300.0, 19.0], [1400.0, 17.0], [1500.0, 12.0], [100.0, 805.0], [1600.0, 12.0], [1700.0, 14.0], [1800.0, 7.0], [1900.0, 12.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 2.0], [3100.0, 1.0], [200.0, 1237.0], [3300.0, 1.0], [3200.0, 3.0], [3400.0, 2.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 3.0], [3900.0, 4.0], [4000.0, 1.0], [4100.0, 2.0], [4200.0, 2.0], [300.0, 1191.0], [5600.0, 1.0], [5500.0, 2.0], [400.0, 741.0], [6500.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7500.0, 1.0], [500.0, 414.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 104.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4164.0, "series": [{"data": [[0.0, 4164.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 922.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.846153846153847, "minX": 1.60239222E12, "maxY": 10.0, "series": [{"data": [[1.60239222E12, 9.846153846153847], [1.60239234E12, 10.0], [1.60239246E12, 9.94508301404853], [1.60239228E12, 10.0], [1.6023924E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239246E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 784.0, "series": [{"data": [[8.0, 583.0], [4.0, 543.0], [1.0, 485.0], [9.0, 407.5], [10.0, 405.2208494208494], [5.0, 784.0], [6.0, 275.0], [3.0, 383.0], [7.0, 495.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768751, 405.3545279383423]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 87.71666666666667, "minX": 1.60239222E12, "maxY": 1.1006206683333334E7, "series": [{"data": [[1.60239222E12, 106483.33333333333], [1.60239234E12, 1.1006206683333334E7], [1.60239246E12, 5310596.9], [1.60239228E12, 9998777.316666666], [1.6023924E12, 9555434.683333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60239222E12, 87.71666666666667], [1.60239234E12, 10967.5], [1.60239246E12, 5431.15], [1.60239228E12, 9077.983333333334], [1.6023924E12, 9579.416666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239246E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 371.7436216552585, "minX": 1.60239222E12, "maxY": 535.7692307692308, "series": [{"data": [[1.60239222E12, 535.7692307692308], [1.60239234E12, 371.7436216552585], [1.60239246E12, 384.1404853128991], [1.60239228E12, 438.8925438596492], [1.6023924E12, 421.59689922480635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239246E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 367.80833851897927, "minX": 1.60239222E12, "maxY": 533.3076923076923, "series": [{"data": [[1.60239222E12, 533.3076923076923], [1.60239234E12, 367.80833851897927], [1.60239246E12, 380.19667943805865], [1.60239228E12, 434.91374269005854], [1.6023924E12, 417.92952783650435]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239246E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0038314176245210743, "minX": 1.60239222E12, "maxY": 6.0, "series": [{"data": [[1.60239222E12, 6.0], [1.60239234E12, 0.0062227753578095926], [1.60239246E12, 0.0038314176245210743], [1.60239228E12, 0.011695906432748565], [1.6023924E12, 0.004933051444679357]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239246E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60239222E12, "maxY": 7535.0, "series": [{"data": [[1.60239222E12, 1040.0], [1.60239234E12, 7095.0], [1.60239246E12, 4260.0], [1.60239228E12, 7535.0], [1.6023924E12, 6545.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60239222E12, 120.0], [1.60239234E12, 25.0], [1.60239246E12, 28.0], [1.60239228E12, 16.962999020814898], [1.6023924E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60239222E12, 120.0], [1.60239234E12, 26.83840030670166], [1.60239246E12, 28.0], [1.60239228E12, 19.553100130558015], [1.6023924E12, 14.116000270843507]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60239222E12, 120.0], [1.60239234E12, 25.551999616622922], [1.60239246E12, 28.0], [1.60239228E12, 19.005499836802482], [1.6023924E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60239222E12, 120.0], [1.60239234E12, 3.0], [1.60239246E12, 2.0], [1.60239228E12, 13.0], [1.6023924E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60239222E12, 436.0], [1.60239234E12, 326.0], [1.60239246E12, 335.0], [1.60239228E12, 326.0], [1.6023924E12, 333.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239246E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 144.5, "minX": 2.0, "maxY": 3232.5, "series": [{"data": [[32.0, 289.5], [33.0, 270.0], [2.0, 3232.5], [35.0, 282.0], [34.0, 283.0], [37.0, 248.0], [36.0, 270.5], [40.0, 187.5], [41.0, 234.0], [42.0, 222.0], [4.0, 503.5], [5.0, 1562.0], [6.0, 411.0], [7.0, 583.0], [8.0, 144.5], [9.0, 1407.0], [11.0, 632.0], [12.0, 595.0], [13.0, 394.0], [14.0, 491.0], [15.0, 412.0], [16.0, 454.0], [17.0, 473.0], [18.0, 279.5], [19.0, 373.0], [20.0, 367.5], [21.0, 387.0], [22.0, 371.0], [23.0, 395.0], [24.0, 374.5], [25.0, 365.0], [26.0, 336.5], [27.0, 332.0], [28.0, 329.5], [29.0, 303.5], [30.0, 318.0], [31.0, 286.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 144.0, "minX": 2.0, "maxY": 3232.0, "series": [{"data": [[32.0, 283.5], [33.0, 263.0], [2.0, 3232.0], [35.0, 279.0], [34.0, 278.5], [37.0, 242.0], [36.0, 270.5], [40.0, 186.5], [41.0, 233.0], [42.0, 221.5], [4.0, 501.0], [5.0, 1560.0], [6.0, 404.5], [7.0, 579.0], [8.0, 144.0], [9.0, 1406.0], [11.0, 629.0], [12.0, 590.5], [13.0, 384.0], [14.0, 489.0], [15.0, 394.0], [16.0, 444.5], [17.0, 468.0], [18.0, 278.0], [19.0, 372.0], [20.0, 358.0], [21.0, 385.0], [22.0, 362.5], [23.0, 387.0], [24.0, 369.5], [25.0, 360.0], [26.0, 334.0], [27.0, 327.0], [28.0, 325.0], [29.0, 298.5], [30.0, 315.0], [31.0, 281.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60239222E12, "maxY": 26.783333333333335, "series": [{"data": [[1.60239222E12, 0.38333333333333336], [1.60239234E12, 26.783333333333335], [1.60239246E12, 12.883333333333333], [1.60239228E12, 22.8], [1.6023924E12, 23.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239246E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60239222E12, "maxY": 26.783333333333335, "series": [{"data": [[1.60239222E12, 0.21666666666666667], [1.60239234E12, 26.783333333333335], [1.60239246E12, 13.05], [1.60239228E12, 22.8], [1.6023924E12, 23.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239246E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60239222E12, "maxY": 26.783333333333335, "series": [{"data": [[1.60239222E12, 0.21666666666666667], [1.60239234E12, 26.783333333333335], [1.60239246E12, 13.05], [1.60239228E12, 22.8], [1.6023924E12, 23.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239246E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60239222E12, "maxY": 26.783333333333335, "series": [{"data": [[1.60239222E12, 0.21666666666666667], [1.60239234E12, 26.783333333333335], [1.60239246E12, 13.05], [1.60239228E12, 22.8], [1.6023924E12, 23.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239246E12, "title": "Total Transactions Per Second"}},
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

