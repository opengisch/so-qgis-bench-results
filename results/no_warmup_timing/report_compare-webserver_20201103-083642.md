# QGIS Benchmark summary compare-webserver (20201103-083642)


compare different webservers in front of of 3.10

_run completed in 00h 03m 26s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201103-083642_plot.html)

## Summary
| name           | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx  | Global  |                 36.3 | +0.0%                        |          138.5 | +0.0%                  |          6929.5 | +4.5%                   |         1722 |         9649 |              9.7 |            72 |            0 |     2953.2 |    2466.37 |     2323.5 |      36.6 |   22.7    |      15.3 |          0 |
| qgis310-apache | Global  |                 37.5 | +3.3%                        |          139.4 | +0.7%                  |          6634   | +0.0%                   |         1710 |        10985 |              9.7 |            72 |            0 |     2956.6 |    2451    |     2299.8 |      36.4 |   20.6667 |      12.6 |          0 |
| qgis310-caddy  | Global  |                 42.7 | +17.6%                       |          187.7 | +35.5%                 |          8394   | +26.5%                  |         4403 |        13762 |              9.7 |            72 |            0 |     2938.2 |    2423.7  |     2188.3 |      59.8 |   26.4    |       8.3 |          0 |

## Aggregated
| name                                         | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 15   | +0.0%                        |           75   | +0.0%                  |          3830   | +0.0%                   |         1075 |         4830 |              2.8 |            22 |            0 |     2953.2 |     2602.4 |     2323.5 |      36.6 |      26.6 |      25.1 |          0 |
| qgis310-apache > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 15.3 | +2.0%                        |           75.6 | +0.8%                  |          3850.5 | +0.5%                   |         1085 |         4747 |              2.8 |            22 |            0 |     2956.6 |     2538.2 |     2299.8 |      36.4 |      26.7 |      25.4 |          0 |
| qgis310-caddy > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 17.2 | +14.7%                       |           95.7 | +27.7%                 |          4378   | +14.3%                  |         3013 |         5903 |              2.8 |            22 |            0 |     2938.2 |     2582.8 |     2333.8 |      59.5 |      29.6 |      25.2 |          0 |
| qgis310-nginx > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 13.4 | +0.0%                        |           50.5 | +0.0%                  |          2658.5 | +15.4%                  |          437 |         4245 |              6.1 |            20 |            0 |     2595.8 |     2432.7 |     2325.6 |      36.5 |      26.2 |      18.3 |          0 |
| qgis310-apache > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 14.5 | +8.2%                        |           50.7 | +0.3%                  |          2303   | +0.0%                   |          417 |         5630 |              6.1 |            20 |            0 |     2495.4 |     2456.3 |     2385.6 |      28   |      22   |      12.6 |          0 |
| qgis310-caddy > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 17.3 | +29.1%                       |           72.9 | +44.2%                 |          3467.5 | +50.6%                  |          911 |         6849 |              6.1 |            20 |            0 |     2485.3 |     2425.2 |     2356.6 |      59.8 |      24.8 |      12.6 |          0 |
| qgis310-apache > somap310_lk                 | somap_lk                 |                  7.7 | +0.0%                        |           13.2 | +1.4%                  |           480.5 | +9.0%                   |          208 |          608 |              0.8 |            30 |            0 |     2358.5 |     2358.5 |     2358.5 |      13.3 |      13.3 |      13.3 |          0 |
| qgis310-nginx > somap310_lk                  | somap_lk                 |                  7.9 | +2.6%                        |           13   | +0.0%                  |           441   | +0.0%                   |          210 |          574 |              0.8 |            30 |            0 |     2364   |     2364   |     2364   |      15.3 |      15.3 |      15.3 |          0 |
| qgis310-caddy > somap310_lk                  | somap_lk                 |                  8.2 | +6.5%                        |           19.1 | +46.5%                 |           548.5 | +24.4%                  |          479 |         1010 |              0.8 |            30 |            0 |     2321.7 |     2263.1 |     2188.3 |      37.6 |      24.8 |       8.3 |          0 |

## Detail
| name                                                                                                                                                                                     | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201103-083642/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 15   | +0.0%                        |           75   | +0.0%                  |          3830   | +0.0%                   |            22 |            0 |          0 |      3406.95  |         1075 |         4830 |        4723.3 |       4816.65 |          4830 |      2.3537  |                306.904 |           1.003    |              2.8 |     2953.2 |     2602.4 |     2323.5 |      36.6 |      26.6 |      25.1 |
| [qgis310-apache > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201103-083642/qgis310-apache/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 15.3 | +2.0%                        |           75.6 | +0.8%                  |          3850.5 | +0.5%                   |            22 |            0 |          0 |      3434.68  |         1085 |         4747 |        4690.7 |       4740.85 |          4747 |      2.34817 |                306.255 |           1.00064  |              2.8 |     2956.6 |     2538.2 |     2299.8 |      36.4 |      26.7 |      25.4 |
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201103-083642/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 17.2 | +14.7%                       |           95.7 | +27.7%                 |          4378   | +14.3%                  |            22 |            0 |          0 |      4349.82  |         3013 |         5903 |        5558.3 |       5870.15 |          5903 |      1.94604 |                253.732 |           0.829279 |              2.8 |     2938.2 |     2582.8 |     2333.8 |      59.5 |      29.6 |      25.2 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201103-083642/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 13.4 | +0.0%                        |           50.5 | +0.0%                  |          2658.5 | +15.4%                  |            20 |            0 |          0 |      2526.2   |          437 |         4245 |        4161.5 |       4241.45 |          4245 |      2.68781 |                836.307 |           1.12552  |              6.1 |     2595.8 |     2432.7 |     2325.6 |      36.5 |      26.2 |      18.3 |
| [qgis310-apache > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201103-083642/qgis310-apache/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 14.5 | +8.2%                        |           50.7 | +0.3%                  |          2303   | +0.0%                   |            20 |            0 |          0 |      2534.1   |          417 |         5630 |        5052.1 |       5604.6  |          5630 |      2.32748 |                724.262 |           0.974631 |              6.1 |     2495.4 |     2456.3 |     2385.6 |      28   |      22   |      12.6 |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201103-083642/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 17.3 | +29.1%                       |           72.9 | +44.2%                 |          3467.5 | +50.6%                  |            20 |            0 |          0 |      3644     |          911 |         6849 |        6333.8 |       6827.4  |          6849 |      1.74338 |                542.433 |           0.730038 |              6.1 |     2485.3 |     2425.2 |     2356.6 |      59.8 |      24.8 |      12.6 |
| [qgis310-apache > somap310_lk > lk.txt](../results/details/compare-webserver/20201103-083642/qgis310-apache/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.7 | +0.0%                        |           13.2 | +1.4%                  |           480.5 | +9.0%                   |            30 |            0 |          0 |       439.9   |          208 |          608 |         547.9 |        593.15 |           608 |     16.1377  |                437.936 |           6.58326  |              0.8 |     2358.5 |     2358.5 |     2358.5 |      13.3 |      13.3 |      13.3 |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201103-083642/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  7.9 | +2.6%                        |           13   | +0.0%                  |           441   | +0.0%                   |            30 |            0 |          0 |       434.033 |          210 |          574 |         558.7 |        569.05 |           574 |     16.0772  |                435.801 |           6.55856  |              0.8 |     2364   |     2364   |     2364   |      15.3 |      15.3 |      15.3 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201103-083642/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  8.2 | +6.5%                        |           19.1 | +46.5%                 |           548.5 | +24.4%                  |            30 |            0 |          0 |       636.033 |          479 |         1010 |         956.2 |        982.5  |          1010 |     12.2399  |                331.677 |           4.99318  |              0.8 |     2321.7 |     2263.1 |     2188.3 |      37.6 |      24.8 |       8.3 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different webservers in front of of 3.10'

test-cases:
  qgis310-nginx:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis310-apache:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-apache

  qgis310-caddy:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-caddy
```
### parsed test configurations

```
description: compare different webservers in front of of 3.10
test-cases:
  qgis310-apache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '2'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-apache
  qgis310-caddy:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '2'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-caddy
  qgis310-nginx:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '2'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```