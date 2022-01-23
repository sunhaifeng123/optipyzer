from pickletools import optimize
from fastapi import HTTPException

from .request_models import OptimizeQuery

def verify_dna(query: OptimizeQuery):
    # verify that the sequeryuence length
    # is divisible by 3 (codons)
    if len(query.seq) % 3 != 0:
        raise HTTPException(400, detail="DNA sequence must be devisible by 3")
    
    # verify all characters are
    # ATGC
    for base, i in zip(query.seq, range(len(query.seq))):
        if base.upper() not in "ATGC":
            raise HTTPException(400, f"Invalid base '{base}' in query at position: {i}")
    
    return query

def verify_protein(query: OptimizeQuery):
    # verify each residue is valid
    for aa, i in zip(query.seq, range(len(query.seq))):
        if aa.upper() not in "DTSEPGACVMILYFHKRWqueryN":
            raise(400, f"Invalid residue '{aa}' in query at position: {i}")
    
    return query