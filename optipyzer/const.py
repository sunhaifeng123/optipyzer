VERSION = "0.1.0"

VALID_AMINO_ACIDS = "ARNDCQEGHILKMFPSTWYV"

CODON_LOOKUP = {
    "I": "ATT",
    "L": "CTT",
    "V": "GTT",
    "F": "TTT",
    "M": "ATG",
    "C": "TGT",
    "A": "GCT",
    "G": "GGT",
    "P": "CCT",
    "T": "ACT",
    "S": "TCT",
    "Y": "TAT",
    "W": "TGG",
    "Q": "CAA",
    "N": "AAT",
    "H": "CAT",
    "E": "GAA",
    "D": "GAT",
    "K": "AAA",
    "R": "CGT",
}

AMINO_ACID_LOOKUP = {
    'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M',
    'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T',
    'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K',
    'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',                
    'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L',
    'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P',
    'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q',
    'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R',
    'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V',
    'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A',
    'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E',
    'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G',
    'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S',
    'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L',
    'TAC':'Y', 'TAT':'Y', 'TAA':'_', 'TAG':'_',
    'TGC':'C', 'TGT':'C', 'TGA':'_', 'TGG':'W',
}

AA_CODON_LIBRARY = {
    'A': ['GCT','GCC','GCA','GCG'],
    'R': ['CGT','CGC','CGA','CGG','AGA','AGG'],
    'N': ['AAT','AAC'],
    'D': ['GAT','GAC'],
    'C': ['TGT','TGC'],
    'Q': ['CAA','CAG'],
    'E': ['GAA','GAG'],
    'G': ['GGT','GGC','GGA','GGG'],
    'H': ['CAT','CAC'],
    'I': ['ATT','ATC','ATA'],
    'L': ['TTA','TTG','CTT','CTC','CTA','CTG'],
    'K': ['AAA','AAG'],
    'M': ['ATG'],
    'F': ['TTT','TTC'],
    'P': ['CCT','CCC','CCA','CCG'],
    'S': ['TCT','TCC','TCA','TCG','AGT','AGC'],
    'T': ['ACT','ACC','ACA','ACG'],
    'W': ['TGG'],
    'Y': ['TAT','TAC'],
    'V': ['GTT','GTC','GTA','GTG'],
    'Stop': ['TAA','TAG','TGA']
}