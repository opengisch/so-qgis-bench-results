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
        data: {"result": {"minY": 2338.0, "minX": 0.0, "maxY": 8325.0, "series": [{"data": [[0.0, 2338.0], [0.1, 2338.0], [0.2, 2402.0], [0.3, 2403.0], [0.4, 2403.0], [0.5, 2776.0], [0.6, 2807.0], [0.7, 2874.0], [0.8, 2874.0], [0.9, 2885.0], [1.0, 2889.0], [1.1, 2926.0], [1.2, 2926.0], [1.3, 2946.0], [1.4, 3005.0], [1.5, 3008.0], [1.6, 3008.0], [1.7, 3025.0], [1.8, 3061.0], [1.9, 3061.0], [2.0, 3077.0], [2.1, 3078.0], [2.2, 3085.0], [2.3, 3085.0], [2.4, 3098.0], [2.5, 3155.0], [2.6, 3188.0], [2.7, 3188.0], [2.8, 3195.0], [2.9, 3207.0], [3.0, 3207.0], [3.1, 3207.0], [3.2, 3210.0], [3.3, 3230.0], [3.4, 3230.0], [3.5, 3237.0], [3.6, 3242.0], [3.7, 3250.0], [3.8, 3250.0], [3.9, 3259.0], [4.0, 3264.0], [4.1, 3267.0], [4.2, 3267.0], [4.3, 3269.0], [4.4, 3289.0], [4.5, 3290.0], [4.6, 3290.0], [4.7, 3290.0], [4.8, 3296.0], [4.9, 3304.0], [5.0, 3304.0], [5.1, 3313.0], [5.2, 3315.0], [5.3, 3315.0], [5.4, 3318.0], [5.5, 3318.0], [5.6, 3331.0], [5.7, 3331.0], [5.8, 3345.0], [5.9, 3355.0], [6.0, 3356.0], [6.1, 3356.0], [6.2, 3371.0], [6.3, 3380.0], [6.4, 3381.0], [6.5, 3381.0], [6.6, 3384.0], [6.7, 3385.0], [6.8, 3385.0], [6.9, 3388.0], [7.0, 3388.0], [7.1, 3398.0], [7.2, 3398.0], [7.3, 3412.0], [7.4, 3434.0], [7.5, 3440.0], [7.6, 3440.0], [7.7, 3448.0], [7.8, 3460.0], [7.9, 3463.0], [8.0, 3463.0], [8.1, 3464.0], [8.2, 3465.0], [8.3, 3466.0], [8.4, 3466.0], [8.5, 3467.0], [8.6, 3469.0], [8.7, 3469.0], [8.8, 3471.0], [8.9, 3473.0], [9.0, 3475.0], [9.1, 3475.0], [9.2, 3477.0], [9.3, 3479.0], [9.4, 3484.0], [9.5, 3484.0], [9.6, 3484.0], [9.7, 3490.0], [9.8, 3491.0], [9.9, 3491.0], [10.0, 3492.0], [10.1, 3494.0], [10.2, 3494.0], [10.3, 3499.0], [10.4, 3501.0], [10.5, 3503.0], [10.6, 3503.0], [10.7, 3508.0], [10.8, 3513.0], [10.9, 3558.0], [11.0, 3558.0], [11.1, 3562.0], [11.2, 3562.0], [11.3, 3564.0], [11.4, 3564.0], [11.5, 3572.0], [11.6, 3582.0], [11.7, 3582.0], [11.8, 3585.0], [11.9, 3586.0], [12.0, 3598.0], [12.1, 3598.0], [12.2, 3599.0], [12.3, 3607.0], [12.4, 3619.0], [12.5, 3619.0], [12.6, 3624.0], [12.7, 3629.0], [12.8, 3634.0], [12.9, 3634.0], [13.0, 3639.0], [13.1, 3643.0], [13.2, 3647.0], [13.3, 3647.0], [13.4, 3655.0], [13.5, 3665.0], [13.6, 3665.0], [13.7, 3674.0], [13.8, 3675.0], [13.9, 3676.0], [14.0, 3676.0], [14.1, 3689.0], [14.2, 3691.0], [14.3, 3694.0], [14.4, 3694.0], [14.5, 3694.0], [14.6, 3711.0], [14.7, 3749.0], [14.8, 3749.0], [14.9, 3751.0], [15.0, 3762.0], [15.1, 3762.0], [15.2, 3788.0], [15.3, 3789.0], [15.4, 3799.0], [15.5, 3799.0], [15.6, 3808.0], [15.7, 3822.0], [15.8, 3835.0], [15.9, 3835.0], [16.0, 3838.0], [16.1, 3849.0], [16.2, 3854.0], [16.3, 3854.0], [16.4, 3855.0], [16.5, 3858.0], [16.6, 3861.0], [16.7, 3861.0], [16.8, 3868.0], [16.9, 3883.0], [17.0, 3883.0], [17.1, 3893.0], [17.2, 3895.0], [17.3, 3899.0], [17.4, 3899.0], [17.5, 3900.0], [17.6, 3905.0], [17.7, 3916.0], [17.8, 3916.0], [17.9, 3917.0], [18.0, 3920.0], [18.1, 3921.0], [18.2, 3921.0], [18.3, 3928.0], [18.4, 3930.0], [18.5, 3930.0], [18.6, 3931.0], [18.7, 3937.0], [18.8, 3942.0], [18.9, 3942.0], [19.0, 3947.0], [19.1, 3947.0], [19.2, 3960.0], [19.3, 3960.0], [19.4, 3961.0], [19.5, 3964.0], [19.6, 3966.0], [19.7, 3966.0], [19.8, 3973.0], [19.9, 3980.0], [20.0, 3984.0], [20.1, 3984.0], [20.2, 3998.0], [20.3, 3999.0], [20.4, 3999.0], [20.5, 4000.0], [20.6, 4003.0], [20.7, 4012.0], [20.8, 4012.0], [20.9, 4019.0], [21.0, 4022.0], [21.1, 4028.0], [21.2, 4028.0], [21.3, 4035.0], [21.4, 4045.0], [21.5, 4049.0], [21.6, 4049.0], [21.7, 4049.0], [21.8, 4050.0], [21.9, 4050.0], [22.0, 4057.0], [22.1, 4060.0], [22.2, 4064.0], [22.3, 4064.0], [22.4, 4065.0], [22.5, 4066.0], [22.6, 4075.0], [22.7, 4075.0], [22.8, 4077.0], [22.9, 4078.0], [23.0, 4101.0], [23.1, 4101.0], [23.2, 4109.0], [23.3, 4121.0], [23.4, 4121.0], [23.5, 4129.0], [23.6, 4130.0], [23.7, 4143.0], [23.8, 4143.0], [23.9, 4144.0], [24.0, 4145.0], [24.1, 4145.0], [24.2, 4145.0], [24.3, 4151.0], [24.4, 4154.0], [24.5, 4160.0], [24.6, 4160.0], [24.7, 4166.0], [24.8, 4168.0], [24.9, 4169.0], [25.0, 4169.0], [25.1, 4191.0], [25.2, 4194.0], [25.3, 4194.0], [25.4, 4204.0], [25.5, 4209.0], [25.6, 4215.0], [25.7, 4215.0], [25.8, 4222.0], [25.9, 4231.0], [26.0, 4232.0], [26.1, 4232.0], [26.2, 4233.0], [26.3, 4256.0], [26.4, 4270.0], [26.5, 4270.0], [26.6, 4277.0], [26.7, 4295.0], [26.8, 4295.0], [26.9, 4300.0], [27.0, 4304.0], [27.1, 4315.0], [27.2, 4315.0], [27.3, 4316.0], [27.4, 4317.0], [27.5, 4321.0], [27.6, 4321.0], [27.7, 4321.0], [27.8, 4331.0], [27.9, 4333.0], [28.0, 4333.0], [28.1, 4339.0], [28.2, 4345.0], [28.3, 4348.0], [28.4, 4348.0], [28.5, 4349.0], [28.6, 4373.0], [28.7, 4373.0], [28.8, 4376.0], [28.9, 4377.0], [29.0, 4382.0], [29.1, 4382.0], [29.2, 4408.0], [29.3, 4409.0], [29.4, 4410.0], [29.5, 4410.0], [29.6, 4411.0], [29.7, 4417.0], [29.8, 4432.0], [29.9, 4432.0], [30.0, 4433.0], [30.1, 4455.0], [30.2, 4455.0], [30.3, 4455.0], [30.4, 4459.0], [30.5, 4461.0], [30.6, 4461.0], [30.7, 4483.0], [30.8, 4488.0], [30.9, 4497.0], [31.0, 4497.0], [31.1, 4507.0], [31.2, 4508.0], [31.3, 4513.0], [31.4, 4513.0], [31.5, 4514.0], [31.6, 4524.0], [31.7, 4524.0], [31.8, 4524.0], [31.9, 4525.0], [32.0, 4527.0], [32.1, 4527.0], [32.2, 4530.0], [32.3, 4541.0], [32.4, 4544.0], [32.5, 4544.0], [32.6, 4554.0], [32.7, 4566.0], [32.8, 4566.0], [32.9, 4566.0], [33.0, 4566.0], [33.1, 4571.0], [33.2, 4582.0], [33.3, 4582.0], [33.4, 4608.0], [33.5, 4608.0], [33.6, 4608.0], [33.7, 4612.0], [33.8, 4623.0], [33.9, 4626.0], [34.0, 4626.0], [34.1, 4637.0], [34.2, 4637.0], [34.3, 4654.0], [34.4, 4654.0], [34.5, 4664.0], [34.6, 4682.0], [34.7, 4690.0], [34.8, 4690.0], [34.9, 4695.0], [35.0, 4696.0], [35.1, 4696.0], [35.2, 4700.0], [35.3, 4704.0], [35.4, 4710.0], [35.5, 4710.0], [35.6, 4716.0], [35.7, 4719.0], [35.8, 4721.0], [35.9, 4721.0], [36.0, 4723.0], [36.1, 4728.0], [36.2, 4752.0], [36.3, 4752.0], [36.4, 4760.0], [36.5, 4763.0], [36.6, 4767.0], [36.7, 4767.0], [36.8, 4772.0], [36.9, 4773.0], [37.0, 4773.0], [37.1, 4776.0], [37.2, 4792.0], [37.3, 4795.0], [37.4, 4795.0], [37.5, 4795.0], [37.6, 4802.0], [37.7, 4810.0], [37.8, 4810.0], [37.9, 4818.0], [38.0, 4820.0], [38.1, 4824.0], [38.2, 4824.0], [38.3, 4827.0], [38.4, 4830.0], [38.5, 4830.0], [38.6, 4831.0], [38.7, 4833.0], [38.8, 4838.0], [38.9, 4838.0], [39.0, 4840.0], [39.1, 4841.0], [39.2, 4842.0], [39.3, 4842.0], [39.4, 4845.0], [39.5, 4846.0], [39.6, 4852.0], [39.7, 4852.0], [39.8, 4854.0], [39.9, 4854.0], [40.0, 4861.0], [40.1, 4861.0], [40.2, 4867.0], [40.3, 4870.0], [40.4, 4870.0], [40.5, 4874.0], [40.6, 4880.0], [40.7, 4882.0], [40.8, 4882.0], [40.9, 4885.0], [41.0, 4886.0], [41.1, 4893.0], [41.2, 4893.0], [41.3, 4897.0], [41.4, 4901.0], [41.5, 4901.0], [41.6, 4901.0], [41.7, 4904.0], [41.8, 4907.0], [41.9, 4907.0], [42.0, 4909.0], [42.1, 4918.0], [42.2, 4919.0], [42.3, 4919.0], [42.4, 4920.0], [42.5, 4930.0], [42.6, 4943.0], [42.7, 4943.0], [42.8, 4944.0], [42.9, 4953.0], [43.0, 4961.0], [43.1, 4961.0], [43.2, 4978.0], [43.3, 4979.0], [43.4, 4979.0], [43.5, 4980.0], [43.6, 4986.0], [43.7, 4988.0], [43.8, 4988.0], [43.9, 4990.0], [44.0, 4993.0], [44.1, 4994.0], [44.2, 4994.0], [44.3, 5003.0], [44.4, 5008.0], [44.5, 5009.0], [44.6, 5009.0], [44.7, 5009.0], [44.8, 5014.0], [44.9, 5015.0], [45.0, 5015.0], [45.1, 5018.0], [45.2, 5021.0], [45.3, 5021.0], [45.4, 5028.0], [45.5, 5029.0], [45.6, 5030.0], [45.7, 5030.0], [45.8, 5035.0], [45.9, 5056.0], [46.0, 5058.0], [46.1, 5058.0], [46.2, 5059.0], [46.3, 5062.0], [46.4, 5062.0], [46.5, 5062.0], [46.6, 5063.0], [46.7, 5069.0], [46.8, 5069.0], [46.9, 5071.0], [47.0, 5071.0], [47.1, 5071.0], [47.2, 5071.0], [47.3, 5074.0], [47.4, 5078.0], [47.5, 5081.0], [47.6, 5081.0], [47.7, 5081.0], [47.8, 5082.0], [47.9, 5082.0], [48.0, 5082.0], [48.1, 5084.0], [48.2, 5085.0], [48.3, 5086.0], [48.4, 5086.0], [48.5, 5087.0], [48.6, 5091.0], [48.7, 5091.0], [48.8, 5091.0], [48.9, 5091.0], [49.0, 5092.0], [49.1, 5092.0], [49.2, 5092.0], [49.3, 5095.0], [49.4, 5096.0], [49.5, 5096.0], [49.6, 5101.0], [49.7, 5103.0], [49.8, 5104.0], [49.9, 5104.0], [50.0, 5112.0], [50.1, 5114.0], [50.2, 5114.0], [50.3, 5116.0], [50.4, 5121.0], [50.5, 5126.0], [50.6, 5126.0], [50.7, 5127.0], [50.8, 5128.0], [50.9, 5129.0], [51.0, 5129.0], [51.1, 5129.0], [51.2, 5134.0], [51.3, 5134.0], [51.4, 5134.0], [51.5, 5137.0], [51.6, 5140.0], [51.7, 5140.0], [51.8, 5145.0], [51.9, 5149.0], [52.0, 5150.0], [52.1, 5150.0], [52.2, 5150.0], [52.3, 5151.0], [52.4, 5153.0], [52.5, 5153.0], [52.6, 5153.0], [52.7, 5157.0], [52.8, 5160.0], [52.9, 5160.0], [53.0, 5161.0], [53.1, 5165.0], [53.2, 5167.0], [53.3, 5167.0], [53.4, 5168.0], [53.5, 5168.0], [53.6, 5168.0], [53.7, 5169.0], [53.8, 5172.0], [53.9, 5173.0], [54.0, 5173.0], [54.1, 5173.0], [54.2, 5176.0], [54.3, 5180.0], [54.4, 5180.0], [54.5, 5183.0], [54.6, 5186.0], [54.7, 5190.0], [54.8, 5190.0], [54.9, 5200.0], [55.0, 5200.0], [55.1, 5200.0], [55.2, 5202.0], [55.3, 5205.0], [55.4, 5206.0], [55.5, 5206.0], [55.6, 5217.0], [55.7, 5219.0], [55.8, 5222.0], [55.9, 5222.0], [56.0, 5223.0], [56.1, 5224.0], [56.2, 5224.0], [56.3, 5224.0], [56.4, 5225.0], [56.5, 5227.0], [56.6, 5230.0], [56.7, 5230.0], [56.8, 5231.0], [56.9, 5235.0], [57.0, 5235.0], [57.1, 5238.0], [57.2, 5239.0], [57.3, 5243.0], [57.4, 5243.0], [57.5, 5245.0], [57.6, 5252.0], [57.7, 5252.0], [57.8, 5252.0], [57.9, 5254.0], [58.0, 5255.0], [58.1, 5256.0], [58.2, 5256.0], [58.3, 5256.0], [58.4, 5267.0], [58.5, 5267.0], [58.6, 5270.0], [58.7, 5270.0], [58.8, 5274.0], [58.9, 5274.0], [59.0, 5284.0], [59.1, 5284.0], [59.2, 5285.0], [59.3, 5285.0], [59.4, 5289.0], [59.5, 5290.0], [59.6, 5295.0], [59.7, 5295.0], [59.8, 5299.0], [59.9, 5302.0], [60.0, 5302.0], [60.1, 5302.0], [60.2, 5306.0], [60.3, 5313.0], [60.4, 5313.0], [60.5, 5318.0], [60.6, 5320.0], [60.7, 5322.0], [60.8, 5322.0], [60.9, 5323.0], [61.0, 5324.0], [61.1, 5326.0], [61.2, 5326.0], [61.3, 5326.0], [61.4, 5327.0], [61.5, 5333.0], [61.6, 5333.0], [61.7, 5334.0], [61.8, 5337.0], [61.9, 5337.0], [62.0, 5341.0], [62.1, 5341.0], [62.2, 5343.0], [62.3, 5343.0], [62.4, 5343.0], [62.5, 5348.0], [62.6, 5354.0], [62.7, 5354.0], [62.8, 5359.0], [62.9, 5365.0], [63.0, 5367.0], [63.1, 5367.0], [63.2, 5368.0], [63.3, 5371.0], [63.4, 5371.0], [63.5, 5371.0], [63.6, 5377.0], [63.7, 5379.0], [63.8, 5379.0], [63.9, 5381.0], [64.0, 5383.0], [64.1, 5388.0], [64.2, 5388.0], [64.3, 5392.0], [64.4, 5394.0], [64.5, 5397.0], [64.6, 5397.0], [64.7, 5404.0], [64.8, 5404.0], [64.9, 5405.0], [65.0, 5405.0], [65.1, 5410.0], [65.2, 5412.0], [65.3, 5412.0], [65.4, 5415.0], [65.5, 5416.0], [65.6, 5418.0], [65.7, 5418.0], [65.8, 5418.0], [65.9, 5419.0], [66.0, 5420.0], [66.1, 5420.0], [66.2, 5421.0], [66.3, 5421.0], [66.4, 5424.0], [66.5, 5424.0], [66.6, 5426.0], [66.7, 5429.0], [66.8, 5429.0], [66.9, 5433.0], [67.0, 5439.0], [67.1, 5452.0], [67.2, 5452.0], [67.3, 5452.0], [67.4, 5455.0], [67.5, 5456.0], [67.6, 5456.0], [67.7, 5456.0], [67.8, 5459.0], [67.9, 5461.0], [68.0, 5461.0], [68.1, 5461.0], [68.2, 5466.0], [68.3, 5468.0], [68.4, 5468.0], [68.5, 5470.0], [68.6, 5473.0], [68.7, 5473.0], [68.8, 5478.0], [68.9, 5479.0], [69.0, 5480.0], [69.1, 5480.0], [69.2, 5480.0], [69.3, 5489.0], [69.4, 5492.0], [69.5, 5492.0], [69.6, 5495.0], [69.7, 5495.0], [69.8, 5496.0], [69.9, 5496.0], [70.0, 5497.0], [70.1, 5505.0], [70.2, 5505.0], [70.3, 5516.0], [70.4, 5519.0], [70.5, 5522.0], [70.6, 5522.0], [70.7, 5526.0], [70.8, 5529.0], [70.9, 5530.0], [71.0, 5530.0], [71.1, 5531.0], [71.2, 5538.0], [71.3, 5540.0], [71.4, 5540.0], [71.5, 5547.0], [71.6, 5547.0], [71.7, 5547.0], [71.8, 5548.0], [71.9, 5549.0], [72.0, 5549.0], [72.1, 5549.0], [72.2, 5553.0], [72.3, 5555.0], [72.4, 5558.0], [72.5, 5558.0], [72.6, 5560.0], [72.7, 5563.0], [72.8, 5563.0], [72.9, 5563.0], [73.0, 5567.0], [73.1, 5568.0], [73.2, 5570.0], [73.3, 5570.0], [73.4, 5578.0], [73.5, 5578.0], [73.6, 5578.0], [73.7, 5579.0], [73.8, 5583.0], [73.9, 5589.0], [74.0, 5589.0], [74.1, 5593.0], [74.2, 5594.0], [74.3, 5597.0], [74.4, 5597.0], [74.5, 5599.0], [74.6, 5600.0], [74.7, 5603.0], [74.8, 5603.0], [74.9, 5603.0], [75.0, 5607.0], [75.1, 5607.0], [75.2, 5614.0], [75.3, 5615.0], [75.4, 5618.0], [75.5, 5618.0], [75.6, 5622.0], [75.7, 5622.0], [75.8, 5631.0], [75.9, 5631.0], [76.0, 5647.0], [76.1, 5649.0], [76.2, 5652.0], [76.3, 5652.0], [76.4, 5654.0], [76.5, 5655.0], [76.6, 5655.0], [76.7, 5655.0], [76.8, 5658.0], [76.9, 5662.0], [77.0, 5662.0], [77.1, 5665.0], [77.2, 5670.0], [77.3, 5676.0], [77.4, 5676.0], [77.5, 5679.0], [77.6, 5684.0], [77.7, 5685.0], [77.8, 5685.0], [77.9, 5687.0], [78.0, 5690.0], [78.1, 5695.0], [78.2, 5695.0], [78.3, 5697.0], [78.4, 5698.0], [78.5, 5698.0], [78.6, 5703.0], [78.7, 5709.0], [78.8, 5713.0], [78.9, 5713.0], [79.0, 5713.0], [79.1, 5726.0], [79.2, 5733.0], [79.3, 5733.0], [79.4, 5734.0], [79.5, 5736.0], [79.6, 5741.0], [79.7, 5741.0], [79.8, 5741.0], [79.9, 5742.0], [80.0, 5745.0], [80.1, 5745.0], [80.2, 5745.0], [80.3, 5748.0], [80.4, 5748.0], [80.5, 5761.0], [80.6, 5762.0], [80.7, 5763.0], [80.8, 5763.0], [80.9, 5767.0], [81.0, 5769.0], [81.1, 5775.0], [81.2, 5775.0], [81.3, 5793.0], [81.4, 5799.0], [81.5, 5806.0], [81.6, 5806.0], [81.7, 5807.0], [81.8, 5809.0], [81.9, 5809.0], [82.0, 5813.0], [82.1, 5815.0], [82.2, 5822.0], [82.3, 5822.0], [82.4, 5823.0], [82.5, 5826.0], [82.6, 5869.0], [82.7, 5869.0], [82.8, 5870.0], [82.9, 5883.0], [83.0, 5883.0], [83.1, 5883.0], [83.2, 5899.0], [83.3, 5900.0], [83.4, 5900.0], [83.5, 5908.0], [83.6, 5915.0], [83.7, 5922.0], [83.8, 5922.0], [83.9, 5925.0], [84.0, 5927.0], [84.1, 5939.0], [84.2, 5939.0], [84.3, 5940.0], [84.4, 5944.0], [84.5, 5945.0], [84.6, 5945.0], [84.7, 5960.0], [84.8, 5968.0], [84.9, 5973.0], [85.0, 5973.0], [85.1, 5980.0], [85.2, 5986.0], [85.3, 5986.0], [85.4, 5992.0], [85.5, 5993.0], [85.6, 5998.0], [85.7, 5998.0], [85.8, 5999.0], [85.9, 6002.0], [86.0, 6002.0], [86.1, 6002.0], [86.2, 6010.0], [86.3, 6016.0], [86.4, 6017.0], [86.5, 6017.0], [86.6, 6046.0], [86.7, 6047.0], [86.8, 6047.0], [86.9, 6047.0], [87.0, 6058.0], [87.1, 6059.0], [87.2, 6059.0], [87.3, 6075.0], [87.4, 6078.0], [87.5, 6079.0], [87.6, 6079.0], [87.7, 6080.0], [87.8, 6082.0], [87.9, 6085.0], [88.0, 6085.0], [88.1, 6087.0], [88.2, 6093.0], [88.3, 6118.0], [88.4, 6118.0], [88.5, 6155.0], [88.6, 6167.0], [88.7, 6167.0], [88.8, 6180.0], [88.9, 6191.0], [89.0, 6256.0], [89.1, 6256.0], [89.2, 6274.0], [89.3, 6297.0], [89.4, 6332.0], [89.5, 6332.0], [89.6, 6365.0], [89.7, 6389.0], [89.8, 6442.0], [89.9, 6442.0], [90.0, 6495.0], [90.1, 6501.0], [90.2, 6501.0], [90.3, 6508.0], [90.4, 6563.0], [90.5, 6601.0], [90.6, 6601.0], [90.7, 6601.0], [90.8, 6660.0], [90.9, 6660.0], [91.0, 6660.0], [91.1, 6692.0], [91.2, 6759.0], [91.3, 6780.0], [91.4, 6780.0], [91.5, 6785.0], [91.6, 6807.0], [91.7, 6807.0], [91.8, 6830.0], [91.9, 6845.0], [92.0, 6861.0], [92.1, 6861.0], [92.2, 6863.0], [92.3, 6887.0], [92.4, 6945.0], [92.5, 6945.0], [92.6, 6975.0], [92.7, 6983.0], [92.8, 7024.0], [92.9, 7024.0], [93.0, 7075.0], [93.1, 7082.0], [93.2, 7108.0], [93.3, 7108.0], [93.4, 7138.0], [93.5, 7155.0], [93.6, 7155.0], [93.7, 7158.0], [93.8, 7159.0], [93.9, 7169.0], [94.0, 7169.0], [94.1, 7203.0], [94.2, 7229.0], [94.3, 7247.0], [94.4, 7247.0], [94.5, 7269.0], [94.6, 7287.0], [94.7, 7315.0], [94.8, 7315.0], [94.9, 7317.0], [95.0, 7321.0], [95.1, 7321.0], [95.2, 7326.0], [95.3, 7369.0], [95.4, 7371.0], [95.5, 7371.0], [95.6, 7395.0], [95.7, 7416.0], [95.8, 7436.0], [95.9, 7436.0], [96.0, 7449.0], [96.1, 7454.0], [96.2, 7459.0], [96.3, 7459.0], [96.4, 7478.0], [96.5, 7487.0], [96.6, 7490.0], [96.7, 7490.0], [96.8, 7499.0], [96.9, 7517.0], [97.0, 7517.0], [97.1, 7524.0], [97.2, 7539.0], [97.3, 7556.0], [97.4, 7556.0], [97.5, 7558.0], [97.6, 7582.0], [97.7, 7593.0], [97.8, 7593.0], [97.9, 7602.0], [98.0, 7625.0], [98.1, 7626.0], [98.2, 7626.0], [98.3, 7642.0], [98.4, 7666.0], [98.5, 7666.0], [98.6, 7685.0], [98.7, 7761.0], [98.8, 7763.0], [98.9, 7763.0], [99.0, 7805.0], [99.1, 7810.0], [99.2, 7849.0], [99.3, 7849.0], [99.4, 7873.0], [99.5, 8045.0], [99.6, 8052.0], [99.7, 8052.0], [99.8, 8294.0], [99.9, 8325.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 40.0, "series": [{"data": [[2300.0, 1.0], [2400.0, 2.0], [2700.0, 1.0], [2800.0, 4.0], [2900.0, 2.0], [3000.0, 8.0], [3100.0, 3.0], [3300.0, 17.0], [3200.0, 15.0], [3400.0, 23.0], [3500.0, 14.0], [3700.0, 7.0], [3600.0, 17.0], [3800.0, 14.0], [3900.0, 22.0], [4000.0, 19.0], [4100.0, 17.0], [4200.0, 11.0], [4300.0, 17.0], [4400.0, 14.0], [4500.0, 17.0], [4600.0, 13.0], [4700.0, 18.0], [4800.0, 28.0], [5000.0, 39.0], [4900.0, 21.0], [5100.0, 39.0], [5200.0, 37.0], [5300.0, 35.0], [5400.0, 40.0], [5500.0, 33.0], [5600.0, 29.0], [5800.0, 13.0], [5700.0, 22.0], [5900.0, 19.0], [6100.0, 5.0], [6000.0, 18.0], [6200.0, 3.0], [6300.0, 3.0], [6500.0, 3.0], [6600.0, 5.0], [6400.0, 2.0], [6800.0, 6.0], [6900.0, 3.0], [6700.0, 3.0], [7000.0, 3.0], [7100.0, 6.0], [7300.0, 7.0], [7200.0, 5.0], [7400.0, 9.0], [7500.0, 7.0], [7600.0, 6.0], [7700.0, 2.0], [7800.0, 4.0], [8000.0, 2.0], [8200.0, 1.0], [8300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.952380952380953, "minX": 1.6023783E12, "maxY": 12.0, "series": [{"data": [[1.6023786E12, 10.952380952380953], [1.6023783E12, 12.0], [1.60237842E12, 12.0], [1.60237836E12, 12.0], [1.60237854E12, 12.0], [1.60237848E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023786E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3250.0, "minX": 1.0, "maxY": 5058.345303867405, "series": [{"data": [[8.0, 3619.0], [4.0, 3634.0], [2.0, 3585.0], [1.0, 3964.0], [9.0, 3624.0], [10.0, 3250.0], [5.0, 3647.0], [11.0, 3259.0], [12.0, 5058.345303867405], [6.0, 3598.0], [3.0, 3607.0], [7.0, 3599.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5036.228571428574]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 461.03333333333336, "minX": 1.6023783E12, "maxY": 359066.75, "series": [{"data": [[1.6023786E12, 173146.76666666666], [1.6023783E12, 353845.38333333336], [1.60237842E12, 359066.75], [1.60237836E12, 322249.8333333333], [1.60237854E12, 294423.5833333333], [1.60237848E12, 333025.93333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023786E12, 461.03333333333336], [1.6023783E12, 688.6333333333333], [1.60237842E12, 1164.6833333333334], [1.60237836E12, 1013.9666666666667], [1.60237854E12, 1142.1166666666666], [1.60237848E12, 1052.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023786E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4633.173076923076, "minX": 1.6023783E12, "maxY": 5511.611940298505, "series": [{"data": [[1.6023786E12, 5165.8888888888905], [1.6023783E12, 5270.703296703296], [1.60237842E12, 4633.173076923076], [1.60237836E12, 5511.611940298505], [1.60237854E12, 4777.119205298013], [1.60237848E12, 5099.050000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023786E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4632.096153846157, "minX": 1.6023783E12, "maxY": 5510.291044776115, "series": [{"data": [[1.6023786E12, 5164.539682539682], [1.6023783E12, 5269.065934065936], [1.60237842E12, 4632.096153846157], [1.60237836E12, 5510.291044776115], [1.60237854E12, 4776.105960264902], [1.60237848E12, 5097.928571428568]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023786E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6023783E12, "maxY": 1.318681318681319, "series": [{"data": [[1.6023786E12, 0.0], [1.6023783E12, 1.318681318681319], [1.60237842E12, 0.10897435897435895], [1.60237836E12, 0.10447761194029852], [1.60237854E12, 0.09271523178807947], [1.60237848E12, 0.12857142857142856]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023786E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2338.0, "minX": 1.6023783E12, "maxY": 8325.0, "series": [{"data": [[1.6023786E12, 7436.0], [1.6023783E12, 8052.0], [1.60237842E12, 7556.0], [1.60237836E12, 8325.0], [1.60237854E12, 6087.0], [1.60237848E12, 7626.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023786E12, 3250.0], [1.6023783E12, 2338.0], [1.60237842E12, 2402.4129999625684], [1.60237836E12, 3975.1249911487103], [1.60237854E12, 3208.103999891281], [1.60237848E12, 2876.958999630213]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023786E12, 3250.0], [1.6023783E12, 2338.0], [1.60237842E12, 2402.554300014973], [1.60237836E12, 4008.537503540516], [1.60237854E12, 3208.5144000434875], [1.60237848E12, 2878.354900147915]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023786E12, 3250.0], [1.6023783E12, 2338.0], [1.60237842E12, 2402.491499981284], [1.60237836E12, 3993.687495574355], [1.60237854E12, 3208.3319999456407], [1.60237848E12, 2877.7344998151066]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023786E12, 3250.0], [1.6023783E12, 2338.0], [1.60237842E12, 2402.0], [1.60237836E12, 3916.0], [1.60237854E12, 3207.0], [1.60237848E12, 2874.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023786E12, 5134.0], [1.6023783E12, 5015.0], [1.60237842E12, 4479.0], [1.60237836E12, 5394.5], [1.60237854E12, 5086.0], [1.60237848E12, 5108.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023786E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3935.0, "minX": 1.0, "maxY": 5563.0, "series": [{"data": [[1.0, 5563.0], [2.0, 5323.5], [4.0, 3935.0], [5.0, 4600.0], [3.0, 5147.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3935.0, "minX": 1.0, "maxY": 5562.0, "series": [{"data": [[1.0, 5562.0], [2.0, 5322.0], [4.0, 3935.0], [5.0, 4600.0], [3.0, 5146.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.6023783E12, "maxY": 2.6, "series": [{"data": [[1.6023786E12, 0.85], [1.6023783E12, 1.7166666666666666], [1.60237842E12, 2.6], [1.60237836E12, 2.2333333333333334], [1.60237854E12, 2.5166666666666666], [1.60237848E12, 2.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023786E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.6023783E12, "maxY": 2.6, "series": [{"data": [[1.6023786E12, 1.05], [1.6023783E12, 1.5166666666666666], [1.60237842E12, 2.6], [1.60237836E12, 2.2333333333333334], [1.60237854E12, 2.5166666666666666], [1.60237848E12, 2.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023786E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.6023783E12, "maxY": 2.6, "series": [{"data": [[1.6023786E12, 1.05], [1.6023783E12, 1.5166666666666666], [1.60237842E12, 2.6], [1.60237836E12, 2.2333333333333334], [1.60237854E12, 2.5166666666666666], [1.60237848E12, 2.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023786E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.6023783E12, "maxY": 2.6, "series": [{"data": [[1.6023786E12, 1.05], [1.6023783E12, 1.5166666666666666], [1.60237842E12, 2.6], [1.60237836E12, 2.2333333333333334], [1.60237854E12, 2.5166666666666666], [1.60237848E12, 2.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023786E12, "title": "Total Transactions Per Second"}},
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

