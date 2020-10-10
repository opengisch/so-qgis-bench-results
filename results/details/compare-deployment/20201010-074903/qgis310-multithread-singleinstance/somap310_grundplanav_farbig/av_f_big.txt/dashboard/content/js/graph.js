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
        data: {"result": {"minY": 2295.0, "minX": 0.0, "maxY": 8390.0, "series": [{"data": [[0.0, 2295.0], [0.1, 2295.0], [0.2, 2316.0], [0.3, 2751.0], [0.4, 2751.0], [0.5, 2764.0], [0.6, 2766.0], [0.7, 2797.0], [0.8, 2797.0], [0.9, 2809.0], [1.0, 2810.0], [1.1, 2866.0], [1.2, 2866.0], [1.3, 2900.0], [1.4, 2900.0], [1.5, 2926.0], [1.6, 2926.0], [1.7, 2970.0], [1.8, 2978.0], [1.9, 2978.0], [2.0, 3009.0], [2.1, 3017.0], [2.2, 3037.0], [2.3, 3037.0], [2.4, 3068.0], [2.5, 3092.0], [2.6, 3103.0], [2.7, 3103.0], [2.8, 3113.0], [2.9, 3187.0], [3.0, 3194.0], [3.1, 3194.0], [3.2, 3195.0], [3.3, 3198.0], [3.4, 3198.0], [3.5, 3202.0], [3.6, 3202.0], [3.7, 3203.0], [3.8, 3203.0], [3.9, 3207.0], [4.0, 3213.0], [4.1, 3222.0], [4.2, 3222.0], [4.3, 3223.0], [4.4, 3227.0], [4.5, 3237.0], [4.6, 3237.0], [4.7, 3245.0], [4.8, 3250.0], [4.9, 3270.0], [5.0, 3270.0], [5.1, 3275.0], [5.2, 3281.0], [5.3, 3281.0], [5.4, 3283.0], [5.5, 3291.0], [5.6, 3305.0], [5.7, 3305.0], [5.8, 3319.0], [5.9, 3326.0], [6.0, 3334.0], [6.1, 3334.0], [6.2, 3336.0], [6.3, 3344.0], [6.4, 3358.0], [6.5, 3358.0], [6.6, 3360.0], [6.7, 3369.0], [6.8, 3369.0], [6.9, 3383.0], [7.0, 3417.0], [7.1, 3422.0], [7.2, 3422.0], [7.3, 3425.0], [7.4, 3431.0], [7.5, 3448.0], [7.6, 3448.0], [7.7, 3452.0], [7.8, 3455.0], [7.9, 3460.0], [8.0, 3460.0], [8.1, 3464.0], [8.2, 3489.0], [8.3, 3491.0], [8.4, 3491.0], [8.5, 3495.0], [8.6, 3500.0], [8.7, 3500.0], [8.8, 3500.0], [8.9, 3506.0], [9.0, 3508.0], [9.1, 3508.0], [9.2, 3516.0], [9.3, 3517.0], [9.4, 3518.0], [9.5, 3518.0], [9.6, 3524.0], [9.7, 3531.0], [9.8, 3532.0], [9.9, 3532.0], [10.0, 3536.0], [10.1, 3538.0], [10.2, 3538.0], [10.3, 3551.0], [10.4, 3555.0], [10.5, 3556.0], [10.6, 3556.0], [10.7, 3558.0], [10.8, 3566.0], [10.9, 3572.0], [11.0, 3572.0], [11.1, 3574.0], [11.2, 3575.0], [11.3, 3576.0], [11.4, 3576.0], [11.5, 3584.0], [11.6, 3589.0], [11.7, 3589.0], [11.8, 3589.0], [11.9, 3597.0], [12.0, 3600.0], [12.1, 3600.0], [12.2, 3609.0], [12.3, 3609.0], [12.4, 3610.0], [12.5, 3610.0], [12.6, 3615.0], [12.7, 3616.0], [12.8, 3621.0], [12.9, 3621.0], [13.0, 3622.0], [13.1, 3624.0], [13.2, 3629.0], [13.3, 3629.0], [13.4, 3631.0], [13.5, 3637.0], [13.6, 3637.0], [13.7, 3643.0], [13.8, 3649.0], [13.9, 3657.0], [14.0, 3657.0], [14.1, 3660.0], [14.2, 3663.0], [14.3, 3669.0], [14.4, 3669.0], [14.5, 3679.0], [14.6, 3690.0], [14.7, 3699.0], [14.8, 3699.0], [14.9, 3713.0], [15.0, 3734.0], [15.1, 3734.0], [15.2, 3754.0], [15.3, 3783.0], [15.4, 3785.0], [15.5, 3785.0], [15.6, 3787.0], [15.7, 3788.0], [15.8, 3789.0], [15.9, 3789.0], [16.0, 3791.0], [16.1, 3792.0], [16.2, 3814.0], [16.3, 3814.0], [16.4, 3814.0], [16.5, 3815.0], [16.6, 3828.0], [16.7, 3828.0], [16.8, 3832.0], [16.9, 3836.0], [17.0, 3836.0], [17.1, 3843.0], [17.2, 3853.0], [17.3, 3854.0], [17.4, 3854.0], [17.5, 3868.0], [17.6, 3881.0], [17.7, 3883.0], [17.8, 3883.0], [17.9, 3921.0], [18.0, 3925.0], [18.1, 3935.0], [18.2, 3935.0], [18.3, 3936.0], [18.4, 3950.0], [18.5, 3950.0], [18.6, 3952.0], [18.7, 3957.0], [18.8, 3958.0], [18.9, 3958.0], [19.0, 3959.0], [19.1, 3965.0], [19.2, 3974.0], [19.3, 3974.0], [19.4, 3981.0], [19.5, 3983.0], [19.6, 3987.0], [19.7, 3987.0], [19.8, 3992.0], [19.9, 4003.0], [20.0, 4003.0], [20.1, 4003.0], [20.2, 4004.0], [20.3, 4009.0], [20.4, 4009.0], [20.5, 4011.0], [20.6, 4019.0], [20.7, 4023.0], [20.8, 4023.0], [20.9, 4037.0], [21.0, 4044.0], [21.1, 4050.0], [21.2, 4050.0], [21.3, 4051.0], [21.4, 4054.0], [21.5, 4058.0], [21.6, 4058.0], [21.7, 4067.0], [21.8, 4072.0], [21.9, 4072.0], [22.0, 4074.0], [22.1, 4076.0], [22.2, 4081.0], [22.3, 4081.0], [22.4, 4081.0], [22.5, 4081.0], [22.6, 4085.0], [22.7, 4085.0], [22.8, 4096.0], [22.9, 4096.0], [23.0, 4101.0], [23.1, 4101.0], [23.2, 4102.0], [23.3, 4105.0], [23.4, 4105.0], [23.5, 4106.0], [23.6, 4107.0], [23.7, 4111.0], [23.8, 4111.0], [23.9, 4124.0], [24.0, 4126.0], [24.1, 4131.0], [24.2, 4131.0], [24.3, 4131.0], [24.4, 4140.0], [24.5, 4158.0], [24.6, 4158.0], [24.7, 4175.0], [24.8, 4182.0], [24.9, 4185.0], [25.0, 4185.0], [25.1, 4196.0], [25.2, 4198.0], [25.3, 4198.0], [25.4, 4209.0], [25.5, 4217.0], [25.6, 4227.0], [25.7, 4227.0], [25.8, 4230.0], [25.9, 4257.0], [26.0, 4258.0], [26.1, 4258.0], [26.2, 4287.0], [26.3, 4294.0], [26.4, 4298.0], [26.5, 4298.0], [26.6, 4309.0], [26.7, 4339.0], [26.8, 4339.0], [26.9, 4341.0], [27.0, 4358.0], [27.1, 4367.0], [27.2, 4367.0], [27.3, 4374.0], [27.4, 4379.0], [27.5, 4382.0], [27.6, 4382.0], [27.7, 4382.0], [27.8, 4391.0], [27.9, 4400.0], [28.0, 4400.0], [28.1, 4400.0], [28.2, 4410.0], [28.3, 4411.0], [28.4, 4411.0], [28.5, 4412.0], [28.6, 4431.0], [28.7, 4431.0], [28.8, 4441.0], [28.9, 4448.0], [29.0, 4456.0], [29.1, 4456.0], [29.2, 4467.0], [29.3, 4468.0], [29.4, 4476.0], [29.5, 4476.0], [29.6, 4479.0], [29.7, 4483.0], [29.8, 4484.0], [29.9, 4484.0], [30.0, 4495.0], [30.1, 4504.0], [30.2, 4504.0], [30.3, 4505.0], [30.4, 4512.0], [30.5, 4514.0], [30.6, 4514.0], [30.7, 4518.0], [30.8, 4530.0], [30.9, 4533.0], [31.0, 4533.0], [31.1, 4547.0], [31.2, 4557.0], [31.3, 4564.0], [31.4, 4564.0], [31.5, 4586.0], [31.6, 4599.0], [31.7, 4599.0], [31.8, 4603.0], [31.9, 4608.0], [32.0, 4616.0], [32.1, 4616.0], [32.2, 4621.0], [32.3, 4635.0], [32.4, 4637.0], [32.5, 4637.0], [32.6, 4643.0], [32.7, 4645.0], [32.8, 4658.0], [32.9, 4658.0], [33.0, 4658.0], [33.1, 4661.0], [33.2, 4665.0], [33.3, 4665.0], [33.4, 4667.0], [33.5, 4673.0], [33.6, 4673.0], [33.7, 4679.0], [33.8, 4687.0], [33.9, 4690.0], [34.0, 4690.0], [34.1, 4693.0], [34.2, 4697.0], [34.3, 4712.0], [34.4, 4712.0], [34.5, 4712.0], [34.6, 4716.0], [34.7, 4728.0], [34.8, 4728.0], [34.9, 4729.0], [35.0, 4736.0], [35.1, 4736.0], [35.2, 4748.0], [35.3, 4758.0], [35.4, 4771.0], [35.5, 4771.0], [35.6, 4779.0], [35.7, 4788.0], [35.8, 4805.0], [35.9, 4805.0], [36.0, 4806.0], [36.1, 4815.0], [36.2, 4815.0], [36.3, 4815.0], [36.4, 4822.0], [36.5, 4823.0], [36.6, 4823.0], [36.7, 4823.0], [36.8, 4854.0], [36.9, 4856.0], [37.0, 4856.0], [37.1, 4858.0], [37.2, 4859.0], [37.3, 4866.0], [37.4, 4866.0], [37.5, 4867.0], [37.6, 4872.0], [37.7, 4878.0], [37.8, 4878.0], [37.9, 4884.0], [38.0, 4885.0], [38.1, 4896.0], [38.2, 4896.0], [38.3, 4903.0], [38.4, 4912.0], [38.5, 4912.0], [38.6, 4949.0], [38.7, 4961.0], [38.8, 4970.0], [38.9, 4970.0], [39.0, 4983.0], [39.1, 4986.0], [39.2, 4991.0], [39.3, 4991.0], [39.4, 4995.0], [39.5, 5009.0], [39.6, 5011.0], [39.7, 5011.0], [39.8, 5015.0], [39.9, 5021.0], [40.0, 5025.0], [40.1, 5025.0], [40.2, 5035.0], [40.3, 5039.0], [40.4, 5039.0], [40.5, 5041.0], [40.6, 5044.0], [40.7, 5044.0], [40.8, 5044.0], [40.9, 5044.0], [41.0, 5045.0], [41.1, 5054.0], [41.2, 5054.0], [41.3, 5056.0], [41.4, 5063.0], [41.5, 5063.0], [41.6, 5063.0], [41.7, 5066.0], [41.8, 5066.0], [41.9, 5066.0], [42.0, 5068.0], [42.1, 5072.0], [42.2, 5076.0], [42.3, 5076.0], [42.4, 5083.0], [42.5, 5087.0], [42.6, 5100.0], [42.7, 5100.0], [42.8, 5103.0], [42.9, 5114.0], [43.0, 5128.0], [43.1, 5128.0], [43.2, 5128.0], [43.3, 5129.0], [43.4, 5129.0], [43.5, 5132.0], [43.6, 5133.0], [43.7, 5138.0], [43.8, 5138.0], [43.9, 5146.0], [44.0, 5147.0], [44.1, 5149.0], [44.2, 5149.0], [44.3, 5159.0], [44.4, 5159.0], [44.5, 5161.0], [44.6, 5161.0], [44.7, 5164.0], [44.8, 5164.0], [44.9, 5167.0], [45.0, 5167.0], [45.1, 5172.0], [45.2, 5180.0], [45.3, 5180.0], [45.4, 5181.0], [45.5, 5197.0], [45.6, 5204.0], [45.7, 5204.0], [45.8, 5215.0], [45.9, 5226.0], [46.0, 5230.0], [46.1, 5230.0], [46.2, 5239.0], [46.3, 5240.0], [46.4, 5246.0], [46.5, 5246.0], [46.6, 5249.0], [46.7, 5252.0], [46.8, 5252.0], [46.9, 5253.0], [47.0, 5254.0], [47.1, 5256.0], [47.2, 5256.0], [47.3, 5262.0], [47.4, 5263.0], [47.5, 5266.0], [47.6, 5266.0], [47.7, 5266.0], [47.8, 5267.0], [47.9, 5269.0], [48.0, 5269.0], [48.1, 5270.0], [48.2, 5271.0], [48.3, 5277.0], [48.4, 5277.0], [48.5, 5280.0], [48.6, 5281.0], [48.7, 5281.0], [48.8, 5282.0], [48.9, 5288.0], [49.0, 5290.0], [49.1, 5290.0], [49.2, 5290.0], [49.3, 5291.0], [49.4, 5292.0], [49.5, 5292.0], [49.6, 5299.0], [49.7, 5311.0], [49.8, 5311.0], [49.9, 5311.0], [50.0, 5312.0], [50.1, 5312.0], [50.2, 5312.0], [50.3, 5317.0], [50.4, 5326.0], [50.5, 5330.0], [50.6, 5330.0], [50.7, 5330.0], [50.8, 5331.0], [50.9, 5335.0], [51.0, 5335.0], [51.1, 5335.0], [51.2, 5342.0], [51.3, 5347.0], [51.4, 5347.0], [51.5, 5352.0], [51.6, 5353.0], [51.7, 5353.0], [51.8, 5354.0], [51.9, 5357.0], [52.0, 5358.0], [52.1, 5358.0], [52.2, 5363.0], [52.3, 5364.0], [52.4, 5365.0], [52.5, 5365.0], [52.6, 5367.0], [52.7, 5368.0], [52.8, 5369.0], [52.9, 5369.0], [53.0, 5370.0], [53.1, 5372.0], [53.2, 5377.0], [53.3, 5377.0], [53.4, 5377.0], [53.5, 5378.0], [53.6, 5378.0], [53.7, 5379.0], [53.8, 5380.0], [53.9, 5380.0], [54.0, 5380.0], [54.1, 5387.0], [54.2, 5387.0], [54.3, 5393.0], [54.4, 5393.0], [54.5, 5401.0], [54.6, 5405.0], [54.7, 5408.0], [54.8, 5408.0], [54.9, 5408.0], [55.0, 5410.0], [55.1, 5410.0], [55.2, 5412.0], [55.3, 5422.0], [55.4, 5427.0], [55.5, 5427.0], [55.6, 5428.0], [55.7, 5428.0], [55.8, 5430.0], [55.9, 5430.0], [56.0, 5434.0], [56.1, 5436.0], [56.2, 5436.0], [56.3, 5436.0], [56.4, 5442.0], [56.5, 5443.0], [56.6, 5445.0], [56.7, 5445.0], [56.8, 5445.0], [56.9, 5450.0], [57.0, 5450.0], [57.1, 5453.0], [57.2, 5453.0], [57.3, 5454.0], [57.4, 5454.0], [57.5, 5455.0], [57.6, 5457.0], [57.7, 5463.0], [57.8, 5463.0], [57.9, 5464.0], [58.0, 5465.0], [58.1, 5465.0], [58.2, 5465.0], [58.3, 5467.0], [58.4, 5471.0], [58.5, 5471.0], [58.6, 5481.0], [58.7, 5492.0], [58.8, 5496.0], [58.9, 5496.0], [59.0, 5499.0], [59.1, 5500.0], [59.2, 5502.0], [59.3, 5502.0], [59.4, 5502.0], [59.5, 5503.0], [59.6, 5505.0], [59.7, 5505.0], [59.8, 5505.0], [59.9, 5506.0], [60.0, 5507.0], [60.1, 5507.0], [60.2, 5509.0], [60.3, 5509.0], [60.4, 5509.0], [60.5, 5511.0], [60.6, 5512.0], [60.7, 5514.0], [60.8, 5514.0], [60.9, 5517.0], [61.0, 5520.0], [61.1, 5526.0], [61.2, 5526.0], [61.3, 5530.0], [61.4, 5534.0], [61.5, 5535.0], [61.6, 5535.0], [61.7, 5536.0], [61.8, 5542.0], [61.9, 5542.0], [62.0, 5546.0], [62.1, 5548.0], [62.2, 5549.0], [62.3, 5549.0], [62.4, 5551.0], [62.5, 5552.0], [62.6, 5556.0], [62.7, 5556.0], [62.8, 5559.0], [62.9, 5563.0], [63.0, 5563.0], [63.1, 5563.0], [63.2, 5564.0], [63.3, 5564.0], [63.4, 5564.0], [63.5, 5565.0], [63.6, 5566.0], [63.7, 5567.0], [63.8, 5567.0], [63.9, 5572.0], [64.0, 5578.0], [64.1, 5581.0], [64.2, 5581.0], [64.3, 5587.0], [64.4, 5587.0], [64.5, 5589.0], [64.6, 5589.0], [64.7, 5595.0], [64.8, 5595.0], [64.9, 5595.0], [65.0, 5595.0], [65.1, 5604.0], [65.2, 5606.0], [65.3, 5606.0], [65.4, 5607.0], [65.5, 5610.0], [65.6, 5612.0], [65.7, 5612.0], [65.8, 5614.0], [65.9, 5620.0], [66.0, 5626.0], [66.1, 5626.0], [66.2, 5628.0], [66.3, 5629.0], [66.4, 5629.0], [66.5, 5629.0], [66.6, 5630.0], [66.7, 5632.0], [66.8, 5632.0], [66.9, 5636.0], [67.0, 5637.0], [67.1, 5640.0], [67.2, 5640.0], [67.3, 5651.0], [67.4, 5653.0], [67.5, 5659.0], [67.6, 5659.0], [67.7, 5666.0], [67.8, 5667.0], [67.9, 5668.0], [68.0, 5668.0], [68.1, 5671.0], [68.2, 5671.0], [68.3, 5673.0], [68.4, 5673.0], [68.5, 5678.0], [68.6, 5679.0], [68.7, 5679.0], [68.8, 5695.0], [68.9, 5696.0], [69.0, 5697.0], [69.1, 5697.0], [69.2, 5708.0], [69.3, 5711.0], [69.4, 5712.0], [69.5, 5712.0], [69.6, 5714.0], [69.7, 5719.0], [69.8, 5721.0], [69.9, 5721.0], [70.0, 5722.0], [70.1, 5725.0], [70.2, 5725.0], [70.3, 5741.0], [70.4, 5741.0], [70.5, 5747.0], [70.6, 5747.0], [70.7, 5748.0], [70.8, 5751.0], [70.9, 5755.0], [71.0, 5755.0], [71.1, 5755.0], [71.2, 5761.0], [71.3, 5764.0], [71.4, 5764.0], [71.5, 5765.0], [71.6, 5771.0], [71.7, 5771.0], [71.8, 5772.0], [71.9, 5774.0], [72.0, 5775.0], [72.1, 5775.0], [72.2, 5775.0], [72.3, 5776.0], [72.4, 5781.0], [72.5, 5781.0], [72.6, 5789.0], [72.7, 5796.0], [72.8, 5799.0], [72.9, 5799.0], [73.0, 5802.0], [73.1, 5806.0], [73.2, 5807.0], [73.3, 5807.0], [73.4, 5808.0], [73.5, 5810.0], [73.6, 5810.0], [73.7, 5810.0], [73.8, 5818.0], [73.9, 5819.0], [74.0, 5819.0], [74.1, 5819.0], [74.2, 5819.0], [74.3, 5827.0], [74.4, 5827.0], [74.5, 5829.0], [74.6, 5832.0], [74.7, 5832.0], [74.8, 5832.0], [74.9, 5833.0], [75.0, 5836.0], [75.1, 5836.0], [75.2, 5841.0], [75.3, 5842.0], [75.4, 5844.0], [75.5, 5844.0], [75.6, 5845.0], [75.7, 5849.0], [75.8, 5851.0], [75.9, 5851.0], [76.0, 5858.0], [76.1, 5859.0], [76.2, 5860.0], [76.3, 5860.0], [76.4, 5866.0], [76.5, 5868.0], [76.6, 5871.0], [76.7, 5871.0], [76.8, 5872.0], [76.9, 5873.0], [77.0, 5873.0], [77.1, 5873.0], [77.2, 5877.0], [77.3, 5881.0], [77.4, 5881.0], [77.5, 5886.0], [77.6, 5888.0], [77.7, 5889.0], [77.8, 5889.0], [77.9, 5890.0], [78.0, 5892.0], [78.1, 5893.0], [78.2, 5893.0], [78.3, 5895.0], [78.4, 5898.0], [78.5, 5898.0], [78.6, 5902.0], [78.7, 5903.0], [78.8, 5903.0], [78.9, 5903.0], [79.0, 5904.0], [79.1, 5905.0], [79.2, 5906.0], [79.3, 5906.0], [79.4, 5908.0], [79.5, 5910.0], [79.6, 5913.0], [79.7, 5913.0], [79.8, 5913.0], [79.9, 5914.0], [80.0, 5917.0], [80.1, 5917.0], [80.2, 5919.0], [80.3, 5920.0], [80.4, 5920.0], [80.5, 5921.0], [80.6, 5922.0], [80.7, 5923.0], [80.8, 5923.0], [80.9, 5925.0], [81.0, 5933.0], [81.1, 5933.0], [81.2, 5933.0], [81.3, 5935.0], [81.4, 5936.0], [81.5, 5943.0], [81.6, 5943.0], [81.7, 5944.0], [81.8, 5950.0], [81.9, 5950.0], [82.0, 5953.0], [82.1, 5957.0], [82.2, 5958.0], [82.3, 5958.0], [82.4, 5958.0], [82.5, 5960.0], [82.6, 5966.0], [82.7, 5966.0], [82.8, 5967.0], [82.9, 5969.0], [83.0, 5973.0], [83.1, 5973.0], [83.2, 5973.0], [83.3, 5981.0], [83.4, 5981.0], [83.5, 5984.0], [83.6, 5993.0], [83.7, 5996.0], [83.8, 5996.0], [83.9, 6005.0], [84.0, 6005.0], [84.1, 6007.0], [84.2, 6007.0], [84.3, 6011.0], [84.4, 6016.0], [84.5, 6021.0], [84.6, 6021.0], [84.7, 6033.0], [84.8, 6035.0], [84.9, 6040.0], [85.0, 6040.0], [85.1, 6045.0], [85.2, 6054.0], [85.3, 6054.0], [85.4, 6054.0], [85.5, 6066.0], [85.6, 6069.0], [85.7, 6069.0], [85.8, 6069.0], [85.9, 6088.0], [86.0, 6089.0], [86.1, 6089.0], [86.2, 6090.0], [86.3, 6095.0], [86.4, 6105.0], [86.5, 6105.0], [86.6, 6134.0], [86.7, 6142.0], [86.8, 6142.0], [86.9, 6169.0], [87.0, 6185.0], [87.1, 6194.0], [87.2, 6194.0], [87.3, 6205.0], [87.4, 6207.0], [87.5, 6218.0], [87.6, 6218.0], [87.7, 6258.0], [87.8, 6267.0], [87.9, 6284.0], [88.0, 6284.0], [88.1, 6294.0], [88.2, 6299.0], [88.3, 6332.0], [88.4, 6332.0], [88.5, 6359.0], [88.6, 6361.0], [88.7, 6361.0], [88.8, 6364.0], [88.9, 6365.0], [89.0, 6374.0], [89.1, 6374.0], [89.2, 6380.0], [89.3, 6389.0], [89.4, 6392.0], [89.5, 6392.0], [89.6, 6434.0], [89.7, 6445.0], [89.8, 6501.0], [89.9, 6501.0], [90.0, 6508.0], [90.1, 6584.0], [90.2, 6584.0], [90.3, 6588.0], [90.4, 6596.0], [90.5, 6603.0], [90.6, 6603.0], [90.7, 6648.0], [90.8, 6656.0], [90.9, 6658.0], [91.0, 6658.0], [91.1, 6708.0], [91.2, 6722.0], [91.3, 6838.0], [91.4, 6838.0], [91.5, 6923.0], [91.6, 6924.0], [91.7, 6924.0], [91.8, 6929.0], [91.9, 6977.0], [92.0, 7015.0], [92.1, 7015.0], [92.2, 7026.0], [92.3, 7038.0], [92.4, 7102.0], [92.5, 7102.0], [92.6, 7114.0], [92.7, 7115.0], [92.8, 7146.0], [92.9, 7146.0], [93.0, 7157.0], [93.1, 7209.0], [93.2, 7232.0], [93.3, 7232.0], [93.4, 7233.0], [93.5, 7238.0], [93.6, 7238.0], [93.7, 7282.0], [93.8, 7303.0], [93.9, 7307.0], [94.0, 7307.0], [94.1, 7317.0], [94.2, 7320.0], [94.3, 7321.0], [94.4, 7321.0], [94.5, 7372.0], [94.6, 7379.0], [94.7, 7399.0], [94.8, 7399.0], [94.9, 7399.0], [95.0, 7410.0], [95.1, 7410.0], [95.2, 7431.0], [95.3, 7450.0], [95.4, 7455.0], [95.5, 7455.0], [95.6, 7467.0], [95.7, 7478.0], [95.8, 7521.0], [95.9, 7521.0], [96.0, 7529.0], [96.1, 7553.0], [96.2, 7574.0], [96.3, 7574.0], [96.4, 7592.0], [96.5, 7595.0], [96.6, 7610.0], [96.7, 7610.0], [96.8, 7621.0], [96.9, 7641.0], [97.0, 7641.0], [97.1, 7669.0], [97.2, 7698.0], [97.3, 7701.0], [97.4, 7701.0], [97.5, 7724.0], [97.6, 7730.0], [97.7, 7735.0], [97.8, 7735.0], [97.9, 7736.0], [98.0, 7741.0], [98.1, 7792.0], [98.2, 7792.0], [98.3, 7804.0], [98.4, 7877.0], [98.5, 7877.0], [98.6, 7892.0], [98.7, 7914.0], [98.8, 7917.0], [98.9, 7917.0], [99.0, 7935.0], [99.1, 7937.0], [99.2, 8104.0], [99.3, 8104.0], [99.4, 8105.0], [99.5, 8145.0], [99.6, 8181.0], [99.7, 8181.0], [99.8, 8373.0], [99.9, 8390.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2200.0, "maxY": 44.0, "series": [{"data": [[2300.0, 1.0], [2200.0, 1.0], [2700.0, 4.0], [2800.0, 3.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 6.0], [3200.0, 16.0], [3300.0, 10.0], [3400.0, 12.0], [3500.0, 25.0], [3700.0, 10.0], [3600.0, 21.0], [3800.0, 12.0], [3900.0, 15.0], [4000.0, 23.0], [4100.0, 17.0], [4200.0, 9.0], [4300.0, 10.0], [4400.0, 16.0], [4600.0, 19.0], [4500.0, 12.0], [4700.0, 11.0], [4800.0, 18.0], [5100.0, 22.0], [5000.0, 23.0], [4900.0, 9.0], [5300.0, 35.0], [5200.0, 30.0], [5400.0, 34.0], [5500.0, 44.0], [5600.0, 30.0], [5800.0, 41.0], [5700.0, 28.0], [5900.0, 39.0], [6000.0, 19.0], [6100.0, 6.0], [6300.0, 9.0], [6200.0, 8.0], [6500.0, 5.0], [6400.0, 2.0], [6600.0, 4.0], [6700.0, 2.0], [6900.0, 4.0], [6800.0, 1.0], [7000.0, 3.0], [7100.0, 5.0], [7400.0, 6.0], [7300.0, 9.0], [7200.0, 5.0], [7600.0, 5.0], [7500.0, 6.0], [7700.0, 7.0], [7800.0, 3.0], [7900.0, 4.0], [8100.0, 4.0], [8300.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.554054054054056, "minX": 1.60231788E12, "maxY": 12.0, "series": [{"data": [[1.60231806E12, 12.0], [1.60231788E12, 12.0], [1.60231818E12, 11.554054054054056], [1.602318E12, 12.0], [1.60231812E12, 12.0], [1.60231794E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231818E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3222.0, "minX": 1.0, "maxY": 5170.209944751379, "series": [{"data": [[8.0, 3624.0], [4.0, 3663.0], [2.0, 3631.0], [1.0, 4023.0], [9.0, 3622.0], [10.0, 3222.0], [5.0, 3660.0], [11.0, 3227.0], [12.0, 5170.209944751379], [6.0, 3629.0], [3.0, 3643.0], [7.0, 3609.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5146.646258503399]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 299.68333333333334, "minX": 1.60231788E12, "maxY": 401675.63333333336, "series": [{"data": [[1.60231806E12, 401675.63333333336], [1.60231788E12, 139732.51666666666], [1.60231818E12, 312469.75], [1.602318E12, 285510.31666666665], [1.60231812E12, 303253.23333333334], [1.60231794E12, 393131.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231806E12, 1029.05], [1.60231788E12, 299.68333333333334], [1.60231818E12, 1103.4833333333333], [1.602318E12, 1134.65], [1.60231812E12, 999.2833333333333], [1.60231794E12, 956.8833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231818E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4744.060810810812, "minX": 1.60231788E12, "maxY": 5611.5317460317465, "series": [{"data": [[1.60231806E12, 5092.384057971011], [1.60231788E12, 5318.15], [1.60231818E12, 4744.060810810812], [1.602318E12, 4823.728476821191], [1.60231812E12, 5528.431818181818], [1.60231794E12, 5611.5317460317465]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231818E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4743.054054054057, "minX": 1.60231788E12, "maxY": 5610.119047619046, "series": [{"data": [[1.60231806E12, 5090.999999999997], [1.60231788E12, 5316.874999999999], [1.60231818E12, 4743.054054054057], [1.602318E12, 4822.841059602648], [1.60231812E12, 5527.325757575757], [1.60231794E12, 5610.119047619046]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231818E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0337837837837838, "minX": 1.60231788E12, "maxY": 3.3499999999999996, "series": [{"data": [[1.60231806E12, 0.07246376811594202], [1.60231788E12, 3.3499999999999996], [1.60231818E12, 0.0337837837837838], [1.602318E12, 0.09933774834437087], [1.60231812E12, 0.09848484848484851], [1.60231794E12, 0.10317460317460321]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231818E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2295.0, "minX": 1.60231788E12, "maxY": 8390.0, "series": [{"data": [[1.60231806E12, 7804.0], [1.60231788E12, 8181.0], [1.60231818E12, 7317.0], [1.602318E12, 6035.0], [1.60231812E12, 7410.0], [1.60231794E12, 8390.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231806E12, 2754.2629995691777], [1.60231788E12, 2797.0], [1.60231818E12, 3095.750999609232], [1.602318E12, 2302.727999238968], [1.60231812E12, 4072.3939999365807], [1.60231794E12, 3202.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231806E12, 2755.889300172329], [1.60231788E12, 2797.0], [1.60231818E12, 3097.2261001563074], [1.602318E12, 2305.600800304413], [1.60231812E12, 4072.633400025368], [1.60231794E12, 3202.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231806E12, 2755.1664997845887], [1.60231788E12, 2797.0], [1.60231818E12, 3096.570499804616], [1.602318E12, 2304.323999619484], [1.60231812E12, 4072.5269999682905], [1.60231794E12, 3202.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231806E12, 2751.0], [1.60231788E12, 2797.0], [1.60231818E12, 3092.0], [1.602318E12, 2295.0], [1.60231812E12, 4072.0], [1.60231794E12, 3202.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231806E12, 4796.5], [1.60231788E12, 4543.0], [1.60231818E12, 4904.0], [1.602318E12, 5290.0], [1.60231812E12, 5547.5], [1.60231794E12, 5584.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3722.0, "minX": 1.0, "maxY": 5808.0, "series": [{"data": [[2.0, 5564.0], [1.0, 5808.0], [4.0, 3722.0], [5.0, 4451.5], [3.0, 5264.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3722.0, "minX": 1.0, "maxY": 5806.0, "series": [{"data": [[2.0, 5563.0], [1.0, 5806.0], [4.0, 3722.0], [5.0, 4451.5], [3.0, 5263.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60231788E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60231806E12, 2.3], [1.60231788E12, 0.8666666666666667], [1.60231818E12, 2.2666666666666666], [1.602318E12, 2.5166666666666666], [1.60231812E12, 2.2], [1.60231794E12, 2.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231818E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60231788E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60231806E12, 2.3], [1.60231788E12, 0.6666666666666666], [1.60231818E12, 2.466666666666667], [1.602318E12, 2.5166666666666666], [1.60231812E12, 2.2], [1.60231794E12, 2.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231818E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60231788E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60231806E12, 2.3], [1.60231788E12, 0.6666666666666666], [1.60231818E12, 2.466666666666667], [1.602318E12, 2.5166666666666666], [1.60231812E12, 2.2], [1.60231794E12, 2.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231818E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60231788E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60231806E12, 2.3], [1.60231788E12, 0.6666666666666666], [1.60231818E12, 2.466666666666667], [1.602318E12, 2.5166666666666666], [1.60231812E12, 2.2], [1.60231794E12, 2.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231818E12, "title": "Total Transactions Per Second"}},
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

