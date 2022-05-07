import * as digitalocean from "@pulumi/digitalocean";
import * as kubernetes from "@pulumi/kubernetes";

export const k8s_foodoo_jubjub = new digitalocean.KubernetesCluster("k8s-foodoo-jubjub", {
    maintenancePolicy: {
        day: "any",
        startTime: "7:00",
    },
    name: "k8s-foodoo-jubjub",
    nodePool: {
        name: "pool-0qx5b1vuj",
        size: "s-2vcpu-4gb",
    },
    region: "nyc1",
    version: "1.22.8-do.1",
    vpcUuid: "861db041-0594-4edb-9790-0c95393b63d7",
}, {
    protect: true,
});
