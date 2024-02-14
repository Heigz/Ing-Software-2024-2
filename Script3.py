import networkx as nx
import matplotlib.pyplot as plt

# Estas son las 4 tipos de graficas principales
# G = nx.Graph()
#
# G = nx.DiGraph()
#
# G = nx.MultiGraph()
#
# G = nx.MultiDiGraph()

#edge_list = [(1,2), (2,3), (3,4), (3,5), (4,6), (6,7)]
edge_list = [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)] #k4 si es posible hacer una representacion planar

G = nx.from_edgelist(edge_list)
#G = nx.from_numpy_array(np.array([[0, 1, 0], [1, 1, 1], [0, 0, 0]]))


nx.draw_planar(G, with_labels=True)
plt.show()